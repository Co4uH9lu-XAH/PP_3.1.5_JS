FROM openjdk:17-alpine
COPY target/spring-boot_security-demo-0.0.1-SNAPSHOT.jar /project/spring-boot_security-demo-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "project/spring-boot_security-demo-0.0.1-SNAPSHOT.jar"]

