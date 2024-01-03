# 1장 객체, 설계

- 소프트웨어 모듈의 목적은 제대로 실행되어야 하고, 변경이 용이해야 하며, 이해하기 쉬워야 한다.
- 하나의 클래스나 메서드에서 너무 많은 세부사항을 다루면 코드를 작성하는 사람뿐만 아니라 코드를 읽고 이해해야 하는 사람 모두에게 큰 부담을 준다.
- A클래스가 B클래스의 내부에 대해 많이 알면 알수록 변경하기 어려워진다. 이는 `의존성`과 관련된 문제다. = `결합도`가 높다.
- 설계의 목표는 객체 사이의 `결합도를 낮춰` 변경이 용이한 설계를 만드는 것이어야 한다.
- 객체 내부의 세부적인 사항을 감추는 것을 `캡슐화`라고 부른다. 목적은 변경하기 쉬운 객체를 만드는 것이다.
- 객체를 인터페이스와 구현으로 나누고 인터페이스만을 공개하는 것은 객체 사이의 결합도를 낮추고 변경하기 쉬운 코드를 작성하기 위해 따라야 하는 가장 기본적인 설계 원칙이다.
-