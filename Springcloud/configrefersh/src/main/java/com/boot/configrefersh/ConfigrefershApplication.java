package com.boot.configrefersh;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@RefreshScope
public class ConfigrefershApplication {
	
	
	
	@Value("${endpoint.value}")
	private String data;
	
	@GetMapping("/data")
	public String getData() {
		return String.valueOf(data);
	}

	public static void main(String[] args) {
		SpringApplication.run(ConfigrefershApplication.class, args);
	}

}
