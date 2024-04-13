package com.banking.services;

import com.banking.models.User;

import com.banking.repositories.clientProfileRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static javax.swing.UIManager.get;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

public class ClientProfileServiceTest {
     @InjectMocks
     clientProfileService Service;

     @Mock
     clientProfileRepo mockRepo;

     @BeforeEach
     public void init() {
         openMocks(this);
     }

     @Test
    public void testaddNewAccount(){
         User account = new User(10, "Jack", "L", "Tavershly", "4871234412", "Broad Street", "Richmond", "Virginia", "23228", "932-02-1234", "jtave", "jtaver@Gmail.com", "evatj","Client");
         mockRepo.save(account);
         Assertions.assertTrue(mockRepo.findAll().isEmpty());
         System.out.println(account);
     }


     @Test
    public void testexistingClientCheck(){
         List<User> list= new ArrayList<>();
         User clientOne = new User(10, "Jack", "L", "Tavershly", "4871234412", "Broad Street", "Richmond", "Virginia", "23228", "932-02-1234", "jtave", "jtaver@Gmail.com", "evatj","Client");
         User clientTwo = new User(15,"Tosh","M","Henderson","8049721332","Garland Ave","Richmond","Virginia","23224","232-54-2345","thend","Thenderson@Gmail.com","dneht","Client");
         User clientThr = new User(12,"James","H","Lovely","6048921827","Brook Ave","Richmond","Virginia","23226","242-16-2367","jlove","JLovely@Gmail.com","evolj","Client");
         ArrayList<User>userCheck;
         userCheck = mockRepo.findByssNum("");
         userCheck.add(clientOne);
         userCheck.add(clientTwo);
         userCheck.add(clientThr);
         Assertions.assertTrue(mockRepo.findAll().isEmpty());
         when(Service.existingClientCheck("242-16-2367")).thenReturn(userCheck);
     }

     @Test
    public void testloginCheck() {
         User account = new User(10, "Jack", "L", "Tavershly", "4871234412", "Broad Street", "Richmond", "Virginia", "23228", "932-02-1234", "jtave", "jtaver@Gmail.com", "evatj","Client");
         Optional<User> result;
         result=mockRepo.findByCreds("jtave","evatj");

         Assertions.assertTrue(mockRepo.findAll().isEmpty());
         when(Service.loginCheck("jtave","evatj")).thenReturn(result);
         System.out.println(result);

     }

     @Test
    public void testprofileInfoRetrieve(){
         List<User> list= new ArrayList<>();
         User clientOne = new User(10, "Jack", "L", "Tavershly", "4871234412", "Broad Street", "Richmond", "Virginia", "23228", "932-02-1234", "jtave", "jtaver@Gmail.com", "evatj", "Client");
         User clientTwo = new User(15,"Tosh","M","Henderson","8049721332","Garland Ave","Richmond","Virginia","23224","232-54-2345","thend","Thenderson@Gmail.com","dneht", "Client");
         User clientThr = new User(12,"James","H","Lovely","6048921827","Brook Ave","Richmond","Virginia","23226","242-16-2367","jlove","JLovely@Gmail.com","evolj", "Client");
         Optional<User> result;
         result = mockRepo.findById(10);
         when(Service.profileInfoRetrieve(10)).thenReturn(result);
         System.out.println(result);

     }

     @Test
    public void testemailCheck(){
         List<User> list= new ArrayList<>();
         User clientOne = new User(10, "Jack", "L", "Tavershly", "4871234412", "Broad Street", "Richmond", "Virginia", "23228", "932-02-1234", "jtave", "jtaver@Gmail.com", "evatj", "Client");
         User clientTwo = new User(15,"Tosh","M","Henderson","8049721332","Garland Ave","Richmond","Virginia","23224","232-54-2345","thend","Thenderson@Gmail.com","dneht", "Client");
         User clientThr = new User(12,"James","H","Lovely","6048921827","Brook Ave","Richmond","Virginia","23226","242-16-2367","jlove","JLovely@Gmail.com","evolj", "Client");
         Optional<User> result;
         result = mockRepo.findByEmail("");
         when(Service.emailCheck("JLovely@Gmail.com")).thenReturn(result);
         System.out.println(result);

     }

}