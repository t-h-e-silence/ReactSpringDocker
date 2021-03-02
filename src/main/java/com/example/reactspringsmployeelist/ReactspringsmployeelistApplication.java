package com.example.reactspringsmployeelist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource(ignoreResourceNotFound = true, value ="classpath:properties/application.properties")
public class ReactspringsmployeelistApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReactspringsmployeelistApplication.class, args);
    }
}
