package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    boolean existsByUsername(String username); // 아이디 중복 확인용

    User findByEmail(String email); // 로그인용: 이메일로 유저 조회
    boolean existsByEmail(String email);
}
