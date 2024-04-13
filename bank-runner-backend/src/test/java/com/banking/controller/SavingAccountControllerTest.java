package com.banking.controller;

import com.banking.services.savingsAccService;
import org.apache.catalina.connector.Response;
import org.junit.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.engine.Constants;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.test.web.servlet.setup.StandaloneMockMvcBuilder;
import org.springframework.web.context.WebApplicationContext;

import java.math.BigDecimal;
import java.net.URI;
import java.util.ArrayList;
import java.util.Map;
import java.util.logging.Filter;

import static org.junit.jupiter.api.Assertions.assertIterableEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.MockitoAnnotations.openMocks;



    @RunWith(SpringRunner.class)
    @WebMvcTest(savingAccountController.class)
    public class SavingAccountControllerTest{

        @Autowired
        private MockMvc mvc;

//        @Test
//        public void getAllSavingsAccountsWebTest() throws Exception
//        {
//            mvc.perform( MockMvcRequestBuilders
//                            .get("/savings")
//                            .accept(MediaType.APPLICATION_JSON))
//                    .andDo(MockMvcResultHandlers.print())
//                    .andExpect(MockMvcResultMatchers.status().isOk())
//                    .andExpect(MockMvcResultMatchers.jsonPath("$.savings").exists())
//                    .andExpect(MockMvcResultMatchers.jsonPath("$.savings[*].CLIENT_ID").isNotEmpty());
//        }
    }










//
//    @Autowired
//    private WebApplicationContext wac;
//
//    @Mock
//    private savingsAccService savingsAccService;
//
//    @InjectMocks
//    private savingAccountController savingAccountController;
//
//    private MockMvc mockMvc =
//
//    @BeforeEach
//    public void init() throws Exception {
//        openMocks(this);
//
//
//
//    }
//
//    @Test
//    public void contextLoads() throws Exception {
//        //assertIterableEquals(savingAccountController).isNotNull();
//        //mockMvc  = MockMvcBuilders.webAppContextSetup(wac).build();
//
//        URI mockUrl = URI.create("https://stackoverflow.com/questions/42725199/how-to-use-mockmvcresultmatchers-jsonpath");
//        //mockUrl = new URI();
//        MvcResult result;
//        result = (MvcResult) this.mockMvc.perform(MockMvcRequestBuilders.get(mockUrl)).andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.content().contentType("application/    json;charset=UTF-8")).andDo(MockMvcResultHandlers.print());
//        assertNotNull(result);
//    }







