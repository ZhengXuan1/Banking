package com.banking.services;
import com.banking.models.checkingAccountInfo;
import com.banking.repositories.checkingAccountInfoRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.willDoNothing;
import static org.mockito.Mockito.*;
import static org.mockito.MockitoAnnotations.openMocks;


public class CheckingAccountServiceTest {





        @InjectMocks
        checkingServiceimpl managerService;

    //create the mock object for checkingServiceimpl
        @Mock
        checkingAccountInfoRepo dao;
        private checkingAccountInfo checkingAccountInfo;
        private checkingAccountInfo createNewCheckingAcc;
        //Create checking account object Mock
     private final checkingAccountInfo MOCH_CHECKING_ACCOUNT_1 = new checkingAccountInfo(1, 123, 2348, 400,1);
     private final checkingAccountInfo MOCH_CHECKING_ACCOUNT_2  = new checkingAccountInfo(2, 765, 2347, 4000,2);
     private final checkingAccountInfo MOCH_CHECKING_ACCOUNT_3 = new checkingAccountInfo(4, 123, 2343, 40,3);

     private final checkingAccountInfo MOCH_CHECKING_ACCOUNT_4= new checkingAccountInfo(3, 123, 2344,40,3);
     private final checkingAccountInfo MOCH_CHECKING_ACCOUNT_5= new checkingAccountInfo(5, 876, 2347, 400,5);

     private List<checkingAccountInfo>  MOCH_ALL_CHECKING_ACCOUNT;
     private  List< checkingAccountInfo> MOCH_CHECKING_ACC_FOR_CLIENT_1;
     private  List< checkingAccountInfo> MOCH_CHECKING_ACC_FOR_CREATE;



    @BeforeEach
        public void init() {
            openMocks(this);

        MOCH_ALL_CHECKING_ACCOUNT = new ArrayList<>();
        MOCH_ALL_CHECKING_ACCOUNT.add(MOCH_CHECKING_ACCOUNT_1) ;
        MOCH_ALL_CHECKING_ACCOUNT.add(MOCH_CHECKING_ACCOUNT_2) ;
        MOCH_ALL_CHECKING_ACCOUNT.add(MOCH_CHECKING_ACCOUNT_3) ;
        MOCH_ALL_CHECKING_ACCOUNT.add(MOCH_CHECKING_ACCOUNT_4) ;

        MOCH_CHECKING_ACC_FOR_CLIENT_1 = new ArrayList<>();
        MOCH_CHECKING_ACC_FOR_CLIENT_1.add(MOCH_CHECKING_ACCOUNT_3) ;
        MOCH_CHECKING_ACC_FOR_CLIENT_1.add(MOCH_CHECKING_ACCOUNT_4) ;

        MOCH_CHECKING_ACC_FOR_CREATE  = new ArrayList<>();
        MOCH_CHECKING_ACC_FOR_CREATE.add(MOCH_CHECKING_ACCOUNT_5);
        }




    @Test
        public void getAllClientTest()
        {
            List<checkingAccountInfo> list = new ArrayList<checkingAccountInfo>();
            checkingAccountInfo empOne = new checkingAccountInfo(1, 123, 2348, 400,2);
            checkingAccountInfo empTwo = new checkingAccountInfo(2, 876, 2347, 4000,5);
            checkingAccountInfo empThree = new checkingAccountInfo(4, 123, 2343, 40,1);
            list.add(empOne);
            list.add(empTwo);
            list.add(empThree);

            when(dao.findAll()).thenReturn(list);

            //test
            List<checkingAccountInfo> checkingAccountList = managerService.findall();

            assertEquals(3, checkingAccountList.size());
            verify(dao, times(1)).findAll();
        }

    @Test
    public void getAllAccountByIdTest()
    {
        List<checkingAccountInfo> list = new ArrayList<>();
        list.add(new checkingAccountInfo(1, 123456789, 2348987, 400,2));
        when(dao.findByClientId(1)).thenReturn(list);

        List<checkingAccountInfo> accountInfo = managerService.findByClientId(1);

        for(checkingAccountInfo info : accountInfo) {
            assertEquals(123456789, info.getRoutNum());
            assertEquals(2348987, info.getChkAccNum());
            assertEquals(400, info.getChkAccBal());
            assertEquals(2, info.getDummy_PK());
        }

    }

    @Test
    public void createCheckingAccountInformationTest() {

            {
                when(dao.save(MOCH_CHECKING_ACCOUNT_5)).thenReturn(MOCH_CHECKING_ACCOUNT_5);
                checkingAccountInfo test = managerService.create(MOCH_CHECKING_ACCOUNT_5);

                assertEquals(MOCH_CHECKING_ACCOUNT_5, test);
                verify(dao).save(MOCH_CHECKING_ACCOUNT_5);
            }
        }


        @Test
        public void updateCheckingAccountInformation () {

                {
                    when(dao.save(MOCH_CHECKING_ACCOUNT_5)).thenReturn(MOCH_CHECKING_ACCOUNT_5);
                    checkingAccountInfo test = managerService.update(MOCH_CHECKING_ACCOUNT_5);

                    assertEquals(MOCH_CHECKING_ACCOUNT_5, test);
                    verify(dao).save(MOCH_CHECKING_ACCOUNT_5);
                }
            }


    @Test
    public void deleteAccountInformationById(){
        // given - precondition or setup
        int clientId = 2;

        willDoNothing().given(dao).deleteById(clientId);

        // when -  action or the behaviour that we are going test
        managerService.delete(clientId);

        // then - verify the output
        verify(dao, times(1)).deleteById(clientId);
    }

}


