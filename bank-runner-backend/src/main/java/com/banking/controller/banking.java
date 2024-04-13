package com.banking.controller;

import com.banking.models.User;

import com.banking.models.loanApplication;


import com.banking.repositories.loanApplicationRepo;

import com.banking.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Objects;
import java.util.Optional;

@RestController
public class banking {




    @Autowired
    clientProfileService account;
    @Autowired
    loanApplicationService applicationFactory;

    @Autowired
    loanApplicationRepo  loanAppRepo;



    @PostMapping(value="/registerNewAccount")
    public void createNewAccount
            (HttpServletRequest req, HttpServletResponse res,
             @RequestParam(value="fname") String fname,
             @RequestParam(value="midInitial") String midInitial,
             @RequestParam(value="lname") String lname,
             @RequestParam(value="email") String email,
             @RequestParam(value="phone") String phone,
             @RequestParam(value="street") String street,
             @RequestParam(value="city") String city,
             @RequestParam(value="state") String state,
             @RequestParam(value="zipcode") String zipcode,
             @RequestParam(value="ssNum") String ssNum,
             @RequestParam(value="uname") String uname,
             @RequestParam(value="pass") String pass,
             @RequestParam(value="passConfirm") String passConfirm,
             @RequestParam(value="role") String role
             ) throws IOException {


        User profile = new User();
        profile.setFname(fname);
        profile.setMiddleInit(midInitial);
        profile.setLname(lname);
        profile.setEmail(email);
        profile.setPhone(phone);
        profile.setStreet(street);
        profile.setCity(city);
        profile.setState(state);
        profile.setZip(zipcode);
        profile.setSsNum(ssNum);
        profile.setUname(uname);
        profile.setPass(pass);
        profile.setRole(role);


        ArrayList<User> userCheck = account.existingClientCheck(ssNum);


        if(pass.equals(passConfirm) && userCheck.isEmpty())
        {
            account.addNewAccount(profile);
        }


    }



    @PostMapping(value="/loginCheck")
    public @ResponseBody User loginCheck(HttpServletRequest req, HttpServletResponse res,
             @RequestParam(value="uname") String uname,
             @RequestParam(value="pass") String pass)  {


        Optional<User> result = account.loginCheck(uname, pass);
        User check = null;


        if(result.isPresent()) {check = result.get();}
        return check;



    }


        @PostMapping(value="/myProfilePage")
        public @ResponseBody User renderProfileDetails(HttpServletRequest req, HttpServletResponse res,
                        @RequestParam(value="ID") int clientID){


            User clientInfo = null;

            Optional<User> result = account.profileInfoRetrieve(clientID);

            if (result.isPresent()) { clientInfo = result.get();}


            
            return clientInfo;






    }


    @PutMapping(value="/updateAccount")
    public void updateAccount
            (HttpServletRequest req, HttpServletResponse res,
             @RequestParam(value="fname") String fname,
             @RequestParam(value="midInitial") String midInitial,
             @RequestParam(value="lname") String lname,
             @RequestParam(value="email") String email,
             @RequestParam(value="phone") String phone,
             @RequestParam(value="street") String street,
             @RequestParam(value="city") String city,
             @RequestParam(value="state") String state,
             @RequestParam(value="zipcode") String zipcode,
             @RequestParam(value="ssNum") String ssNum,
             @RequestParam(value="uname") String uname,
             @RequestParam(value="pass") String pass,
             @RequestParam(value="role") String role,
             @RequestParam(value="ID") String id
            )  {


        User profile = new User();
        profile.setId(Integer.parseInt(id));
        profile.setFname(fname);
        profile.setMiddleInit(midInitial);
        profile.setLname(lname);
        profile.setEmail(email);
        profile.setPhone(phone);
        profile.setStreet(street);
        profile.setCity(city);
        profile.setState(state);
        profile.setZip(zipcode);
        profile.setSsNum(ssNum);
        profile.setUname(uname);
        profile.setPass(pass);
        profile.setRole(role);






        account.addNewAccount(profile);







    }

    @RequestMapping(value="/verifyEmail")
    public @ResponseBody User verifyEmail(@RequestParam(value="email") String email, HttpServletRequest req, HttpServletResponse res){

        Optional<User> result = account.emailCheck(email);

        User resultSend = null;

        if(result.isPresent()) {
            resultSend = result.get();




        }


        return resultSend;

    }

        @PutMapping(value="/updatePassword")
        public void updatePassword(@RequestParam(value="pass") String pass,
                                   @RequestParam(value="passConfirm") String passConfirm,
                                   @RequestParam(value="ID") String ID,
                                   HttpServletRequest req, HttpServletResponse res){

            User newPasswordChange = null;

        Optional<User> result = account.profileInfoRetrieve(Integer.parseInt(ID));

        if(result.isPresent())
        { newPasswordChange = result.get();
            newPasswordChange.setPass(pass);}




        if(Objects.equals(pass, passConfirm))
        {account.addNewAccount(newPasswordChange);
            }



    }

    @PostMapping(value="/loanApplication")
    public void submitLoanApp
            (HttpServletRequest req, HttpServletResponse res,
             @RequestParam(value="fname") String fname,
             @RequestParam(value="minit") String midInitial,
             @RequestParam(value="lname") String lname,
             @RequestParam(value="dob") String dob,
             @RequestParam(value="email") String email,
             @RequestParam(value="maritalStatus") String maritalStatus,
             @RequestParam(value="street") String street,
             @RequestParam(value="city") String city,
             @RequestParam(value="state") String state,
             @RequestParam(value="zip") String zip,
             @RequestParam(value="ssNum") String ssNum,
             @RequestParam(value="phone") String phone,
             @RequestParam(value="loanAmount") int amount,
             @RequestParam(value="loanPurpose") String purpose,
             @RequestParam(value="salary") int salary,
             @RequestParam(value="decision") String decision,
             @RequestParam(value="status") String status
            )  {

            loanApplication loan = new loanApplication();

            loan.setFname(fname);
            loan.setMidInitial(midInitial);
            loan.setLname(lname);
            loan.setDOB(dob);
            loan.setEmail(email);
            loan.setMaritalStatus(maritalStatus);
            loan.setStreet(street);
            loan.setCity(city);
            loan.setState(state);
            loan.setZip(zip);
            loan.setSsNum(ssNum);
            loan.setPhone(phone);
            loan.setLoanAmount(amount);
            loan.setLoanPurpose(purpose);
            loan.setSalary(salary);
            loan.setDescription(decision);
            loan.setStatus(status);

            applicationFactory.submitLoanApp(loan);




    }


    @GetMapping(value="/loanFind")
    public @ResponseBody ArrayList<loanApplication> loanRetrieve(){

        return applicationFactory.findAll();



    }

    @PutMapping(value="/loanUpdate")
    public void loanDecision(HttpServletRequest req, HttpServletResponse res,
                             @RequestParam(value="appId") int appId,
                             @RequestParam(value="status") String status,
                            @RequestParam(value="description") String description){

        Optional<loanApplication> applicant = loanAppRepo.findById(appId);
        if(applicant.isPresent()) {
            loanApplication loan = applicant.get();

            loan.setApp_id(appId);
            loan.setStatus(status);
            loan.setDescription(description);

            applicationFactory.updateLoanApp(loan);

        }


    }

    @GetMapping("/findbyemail/{email}")
    public ResponseEntity<User> findbyemail(@PathVariable("email") String email){
        User profile = account.findbyemail(email);
        return new ResponseEntity<>(profile, HttpStatus.OK);
    }

    @GetMapping("/findbyCid/{Client_ID}")
    public ResponseEntity<User> findbyemail(@PathVariable("Client_ID") int id){
        User profile = account.findByClientId(id);
        return new ResponseEntity<>(profile, HttpStatus.OK);
    }

    }













