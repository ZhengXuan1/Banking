package com.banking.controller;
import com.banking.models.checkingAccountInfo;
import com.banking.services.checkingServiceimpl;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.junit.Assert;
import static org.mockito.Mockito.*;
@RunWith(MockitoJUnitRunner.class)
class checkingAccountControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @InjectMocks
    private checkingAccountController checkingAccountController;

    @Mock
    private checkingServiceimpl checkingServiceimpl;
    private checkingAccountInfo checkingAccountInfo;
    private List<checkingAccountInfo> checkingAccountInfoList;


    @Before
   public void setUp() {
       checkingAccountInfo = new checkingAccountInfo(1, 123, 2348, 400,2);
       checkingAccountInfo = new checkingAccountInfo(2, 123, 2347, 400,3);

       mockMvc =
                MockMvcBuilders.standaloneSetup(checkingAccountController).build();
 }


    @Test
    public void ygetAllAccount() throws Exception {
        checkingServiceimpl = Mockito.mock(checkingServiceimpl.class);
        checkingAccountController = new checkingAccountController(checkingServiceimpl);

        checkingAccountInfo = new checkingAccountInfo();
        checkingAccountInfo.setChkAccNum(1);
        List<checkingAccountInfo> checkingAccountInfoList = new ArrayList<>();
        checkingAccountInfoList.add(checkingAccountInfo);
        Mockito.when(checkingServiceimpl.findallbyid(Mockito.anyInt())).thenReturn(checkingAccountInfoList);

        List<checkingAccountInfo> searchResultInfo = checkingAccountController.findallbyid(1).getBody();
        Assert.assertNotNull(searchResultInfo);
        Assert.assertEquals(1, searchResultInfo.size());
        }


    @Test
    public void createAccount1() throws Exception {
       checkingServiceimpl = Mockito.mock(checkingServiceimpl.class);
       checkingAccountController = new checkingAccountController(checkingServiceimpl);

        checkingAccountInfo  checkingAccountInfo = new checkingAccountInfo();
         checkingAccountInfo.setChkAccNum(1);
        when(checkingServiceimpl.create(Mockito.any())).thenReturn(checkingAccountInfo);
        checkingAccountInfo createdAcccount = checkingAccountController.create(checkingAccountInfo).getBody();
        Assert.assertNotNull(createdAcccount);
        Assert.assertEquals(1, createdAcccount.getChkAccNum());


    }


    @Test
    public void createAccount() throws Exception {
        checkingServiceimpl = Mockito.mock(checkingServiceimpl.class);
         checkingAccountController = new checkingAccountController(checkingServiceimpl);

        checkingAccountInfo = new checkingAccountInfo();
        checkingAccountInfo.setChkAccNum(1);
        Mockito.when(checkingServiceimpl.create(Mockito.any())).thenReturn(checkingAccountInfo);
        checkingAccountInfo createdAcccount = checkingAccountController.create(checkingAccountInfo).getBody();
        Assert.assertNotNull(createdAcccount);
        Assert.assertEquals(1, createdAcccount.getChkAccNum());


    }


    @Test
    public void updateAccount() throws Exception {
        checkingServiceimpl = Mockito.mock(checkingServiceimpl.class);
        checkingAccountController = new checkingAccountController(checkingServiceimpl);

        checkingAccountInfo = new checkingAccountInfo();
        checkingAccountInfo.setChkAccNum(1);
        Mockito.when(checkingServiceimpl.update(Mockito.any())).thenReturn(checkingAccountInfo);
        checkingAccountInfo updatedAcccount = checkingAccountController.update(checkingAccountInfo).getBody();
        Assert.assertNotNull(updatedAcccount);
        Assert.assertEquals(1, updatedAcccount.getChkAccNum());

    }

}