package com.example.demoresource.web.controller;

import com.example.demoresource.web.dto.db_model.Order;
import com.example.demoresource.web.dto.db_model.OrderProduct;
import com.example.demoresource.web.dto.db_model.Product;
import com.example.demoresource.web.dto.web_model.OrderProductJson;
//import com.example.demoresource.web.repository.OrderProductRepository;
//import com.example.demoresource.web.repository.OrderRepository;
//import com.example.demoresource.web.repository.ProductRepository;
import com.example.demoresource.web.services.ShavermaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ShavermaController {
//    @Autowired
//    ProductRepository productRepository;
//    @Autowired
//    OrderRepository orderRepository;
//    @Autowired
//    OrderProductRepository orderProductRepository;

    @Autowired
    ShavermaService shavermaService;

    // API - read
    //@PreAuthorize("#oauth2.hasScope('foo') and #oauth2.hasScope('read')")
    @RequestMapping(method = RequestMethod.GET, value="/shavermа")
    public List<Product> findAllShaverms() {
        return shavermaService.getProducts();
    }
    //@PreAuthorize("#oauth2.hasScope('foo') and #oauth2.hasScope('write')")
    @RequestMapping(name = "/registerOrder", method = RequestMethod.POST, produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public long registerOrder(@RequestBody OrderProductJson [] productList){
        return shavermaService.registerOrder(productList);
    }
}
