package com.example.demoresource.web.controller;

import com.example.demoresource.web.dto.db_model.Order;
import com.example.demoresource.web.dto.db_model.OrderProduct;
import com.example.demoresource.web.dto.db_model.Product;
import com.example.demoresource.web.dto.web_model.OrderProductJson;
import com.example.demoresource.web.repository.OrderProductRepository;
import com.example.demoresource.web.repository.OrderRepository;
import com.example.demoresource.web.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class ShavermaController {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    OrderProductRepository orderProductRepository;

    // API - read
    //@PreAuthorize("#oauth2.hasScope('foo') and #oauth2.hasScope('read')")
    @RequestMapping(method = RequestMethod.GET, value="/list_shaverm")
    @ResponseBody
    public List<Product> findAllShaverms() {
//        productRepository.save(new Product("images/grid-list/00-52-29-429_640.jpg","острая","Сочное кошачье мясо, свежие помидоры.....", 100.0f));
//        productRepository.save(new Product("images/grid-list/00-52-29-429_640.jpg","КАВКАЗКАЯ","Сочное кошачье мясо, свежие помидоры.....", 150.0f));
//        productRepository.save(new Product("images/grid-list/00-52-29-429_640.jpg","XXL","Сочное кошачье мясо, свежие помидоры.....", 130.0f));
//        productRepository.save(new Product("images/grid-list/00-52-29-429_640.jpg","обычная","Сочное кошачье мясо, свежие помидоры.....", 190.0f));

        List<Product> result = (List<Product>) productRepository.findAll();
        return result;
    }
    //@PreAuthorize("#oauth2.hasScope('foo') and #oauth2.hasScope('write')")
    @RequestMapping(name = "/registerOrder", method = RequestMethod.POST, produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public long registerOrder(@RequestBody OrderProductJson [] productList){
        Order order = new Order();
        for(OrderProductJson p : productList){
            OrderProduct orderProduct = new OrderProduct();
            orderProduct.setProduct(productRepository.findOne(p.getProductId()));
            orderProduct.setQuantity(p.getQuantity());

            order.getOrderProducts().add(orderProduct);
        }
        Order createdOrder = orderRepository.save(order);
        return createdOrder.getId();
    }
}
