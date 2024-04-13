package com.banking.services;
import com.banking.models.savingsAccountInfo;

import com.banking.repositories.savingsAccountInfoRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

//import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertIterableEquals;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.BDDMockito.willDoNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

import java.util.ArrayList;
import java.util.List;


// in the test class, We are testing:
// savingsAccServiceimpl methods (testUser)
//                  vs.
// savingsAccountInfoRepo methods (dao)
// Mockito will mock the repo


public class SavingAccountServiceTest {

    @InjectMocks
    savingsAccServiceimpl testUser;

    @Mock
    savingsAccountInfoRepo mockitoDao;

    // create three (3) savingsAccountInfo objects to MOCK
    private final savingsAccountInfo MOCK_SAVINGS_ACC_1 = new savingsAccountInfo(1, 123, 2348, 400,2);
    private final savingsAccountInfo MOCK_SAVINGS_ACC_2 = new savingsAccountInfo(2, 876, 2347, 4000,5);
    private final savingsAccountInfo MOCK_SAVINGS_ACC_3 = new savingsAccountInfo(4, 123, 2343, 40,1);
    private final savingsAccountInfo MOCK_SAVINGS_ACC_4 = new savingsAccountInfo(1, 123, 2349, 95,3);

    private final savingsAccountInfo MOCK_SAVINGS_ACC_5 = new savingsAccountInfo(3, 423, 2359, 65,4);

    private List<savingsAccountInfo> MOCK_ALL_SAVINGS_ACCS;
    private List<savingsAccountInfo> MOCK_ALL_SAVINGS_ACCS_FOR_CLIENT_1;
    private List<savingsAccountInfo> MOCK_ALL_SAVINGS_ACCS_FOR_CREATE;

    @BeforeEach
    public void init() {

        openMocks(this);

        MOCK_ALL_SAVINGS_ACCS = new ArrayList<>();
        MOCK_ALL_SAVINGS_ACCS.add(MOCK_SAVINGS_ACC_1);
        MOCK_ALL_SAVINGS_ACCS.add(MOCK_SAVINGS_ACC_2);
        MOCK_ALL_SAVINGS_ACCS.add(MOCK_SAVINGS_ACC_3);
        MOCK_ALL_SAVINGS_ACCS.add(MOCK_SAVINGS_ACC_4);

        MOCK_ALL_SAVINGS_ACCS_FOR_CLIENT_1 = new ArrayList<>();
        MOCK_ALL_SAVINGS_ACCS_FOR_CLIENT_1.add(MOCK_SAVINGS_ACC_1);
        MOCK_ALL_SAVINGS_ACCS_FOR_CLIENT_1.add(MOCK_SAVINGS_ACC_4);

        MOCK_ALL_SAVINGS_ACCS_FOR_CREATE = new ArrayList<>();
        MOCK_ALL_SAVINGS_ACCS_FOR_CREATE.add(MOCK_SAVINGS_ACC_5);

    }


    // Test #1
    @Test
    public void getAllClientsSavingsAccountsTest()
    {
        // this method uses savingsAccountInfoRepo object mockitoDao to load
        // all new savings accounts information from above into an arrayList"
        // note: findAll() method is from savingsAccountInfoRepo
        when(mockitoDao.findAll()).thenReturn(MOCK_ALL_SAVINGS_ACCS);
        // uses savingsAccountInfo object testUser to load
        // all new savings accounts information from above into "savingsAccountList"
        // note: findAll() method is from savingsAccSeriveimpl
        List<savingsAccountInfo> savingsAccountList = testUser.findall();

        // TESTS comparing attributes of "list" to "savingsAccountList"
        // verifies that savingsAccServiceimpl method
        // is the same as savingsAccountInfoRepo method
        assertIterableEquals(MOCK_ALL_SAVINGS_ACCS, savingsAccountList);
        verify(mockitoDao).findAll();

    }



    // **********************************************
    // Test #2
    @Test
    public void getAccountsByIdTest()
    {
        when(mockitoDao.findByClientId(1)).thenReturn(MOCK_ALL_SAVINGS_ACCS_FOR_CLIENT_1);
        List<savingsAccountInfo> savingsAccountList = testUser.findallbyid(1);

        assertIterableEquals(MOCK_ALL_SAVINGS_ACCS_FOR_CLIENT_1, savingsAccountList);
        verify(mockitoDao).findByClientId(anyInt());
    }

    // **********************************************
    // Test #3
    // the method to be tested here:
    //      @Override
    //      //public savingsAccountInfo create(savingsAccountInfo saving) {  -- old code replaced by next line, below
    //      public savingsAccountInfo createNewSavingsAccount(savingsAccountInfo saving) {
    ////        return service.save(saving);
    ////    }
    @Test
    public void createNewSavingsAccount() {

        {
            when(mockitoDao.save(MOCK_SAVINGS_ACC_5)).thenReturn(MOCK_SAVINGS_ACC_5);
            savingsAccountInfo test = testUser.create(MOCK_SAVINGS_ACC_5);

            assertEquals(MOCK_SAVINGS_ACC_5, test);
            verify(mockitoDao).save(MOCK_SAVINGS_ACC_5);
        }
    }





        // **********************************************
        // Test #4
    @Test
    public void deleteSavingAccountByEmployeeId(){
        // given - precondition or setup
        int clientId = 2;

        //willDoNothing().given(mockitoDao).deleteById(clientId);
        willDoNothing().given(mockitoDao).deleteById(clientId);

        // when -  action or the behaviour that we are going test
        testUser.delete(clientId);

        // then - verify the output
        verify(mockitoDao, times(1)).deleteById(clientId);
    }

        // **********************************************
        // Test #5
        @Test
        public void updateSavingsAccount() {

            {
                when(mockitoDao.save(MOCK_SAVINGS_ACC_5)).thenReturn(MOCK_SAVINGS_ACC_5);
                savingsAccountInfo test = testUser.update(MOCK_SAVINGS_ACC_5);

                assertEquals(MOCK_SAVINGS_ACC_5, test);
                verify(mockitoDao).save(MOCK_SAVINGS_ACC_5);
            }
        }

        // **********************************************
        // Test #6
        @Test
        public void getAccountsByAccNumber()
        {
            when(mockitoDao.findByClientId(1)).thenReturn(MOCK_ALL_SAVINGS_ACCS_FOR_CLIENT_1);
            List<savingsAccountInfo> savingsAccountList = testUser.findallbyid(1);

            assertIterableEquals(MOCK_ALL_SAVINGS_ACCS_FOR_CLIENT_1, savingsAccountList);
            verify(mockitoDao).findByClientId(anyInt());
        }

}
