package com.example.demoresource.web.services;

import com.example.demoresource.web.dto.db_model.Product;
import com.example.demoresource.web.dto.web_model.OrderProductJson;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

@Component
public class ShavermaService {
    private static List<Product> products = new ArrayList<>();
    private static HashMap<Integer, OrderProductJson []> orderProductJsonMap = new HashMap<>();
    private static Integer orderCounter = 0;

    static {
        products.add(new Product(1,"img", "Острая", "Текс текст текст текст", 500f));
        products.add(new Product(2,"img", "Классическа", "Текс текст текст текст", 200f));
        products.add(new Product(3,"img", "Кавказская", "Текс текст текст текст", 600f));
        products.add(new Product(4,"img", "Гавайская", "Текс текст текст текст", 700f));
        products.add(new Product(5,"img", "Мелкая", "Текс текст текст текст", 100f));
    }

    public List<Product> getProducts() {
        return products;
    }

    public Integer registerOrder(OrderProductJson[] productJson){
        orderCounter++;
        orderProductJsonMap.put(orderCounter, productJson);
        return orderCounter;
    }
}
