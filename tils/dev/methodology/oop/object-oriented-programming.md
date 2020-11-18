# OOP(Object Oriented Programming)

## 왜 클래스 지향 프로그래밍이 아니라 객체지향 프로그래밍인가?

클래스는 객체를 담는 그릇(표현 방식)일 뿐이다. 우리는 설계를 할 때 선언적으로 클래스를 생성한 뒤 그 클래스를 기반으로 코드를 작성해
나가는 게 아니라, 각 객체들의 역할과 책임 그리고 협력에 집중해야 한다.

## 객체

객체는 기본적으로 상태(data)와 행동(behavior)으로 이루어져 있다.

> 전통적인 절차지향적인 방법에서는 데이터를 모든 함수가 공유하고 각 함수가 맡은 행동을 한다.  

왜 이런 방식을 택하게 되었을까? 같은 기능을 하는 소프트웨어더라도 절차지향적으로도 객체지향적으로도 작성할 수 있다.
그러나 이 경우 가장 두드러지는 차이점은 객체지향은 객체들이 각각 데이터를 가지고 있음으로써 캡슐화가 된다는 것과, 그런 객체의 행동이 자신의 상태를 결정한다는 것이다.

### 캡슐화를 통해 우리는 어떤 이득을 얻을 수 있을까?

우리는 마냥 캡슐화를 한다고 해서 객체지향이라고 부르지 않는다. 어디까지 캡슐에 담을 것이냐에 따라 소프트웨어의 가치는 천차만별로 달라지게 되고,
이 가운데서 현명한 판단을 내릴 수 있는 개발자가 바로 좋은 개발자다.

객체지향에서 우리가 하는 일은 마치 인간들이 모여 사회를 이루는 것처럼 (캡슐 안에 데이터와 행동을 담아)객체들을 만들어 그들 간의 공동체를 만들어 주는 것이다.

마치 심즈게임을 하는 것처럼 말이다. 이 공동체는 우리가 창조하는 것이기 때문에 유토피아를 만들든, 디스토피아를 만들든 우리 자유다.
다만 디스토피아는 온갖 길거리에 악취가 풍기고 금새 침몰한다는 사실에 유념하자. 기왕 만들거면 유토피아를 만들어야 보람이 있지 않을까.

유토피아에서는 모든 사회구성원(객체)이 맡은 바 책임이 명확하되, 자율적이면서, 협력에 적극적으로 참여한다.

#### 왜 객체는 자율적이어야 할까?

인간의 두뇌는 병렬사고에 한계가 있기 때문에 한 가지 변경사항의 파급효과를 코드 전반적으로 항상 완벽하게 추적하기가 불가능하다.
때문에 객체가 자율적으로 결정을 내릴 수 있게 함으로써 외부로부터 노출되는 부분을 추상화하고, 이로 인해 변경의 파급효과가 외부로 빠져나가지 못하게 하려는 것이다.

### 협력

객체지향의 세계에서 객체들은 아쉽게도 혼자서 아무것도 하지 못한다. 때문에 기능을 구현하기 위한 유일한 방법은 객체들간의 협력이다.

즉, 다시 말해 협력은 소프트웨어의 기능을 구현하기 위해 일어나는 객체들간의 상호작용이다.

객체들은 협력을 요청하기 위해 메세지를 전송하고, 메세지를 수신하면 요청받은 협력에 부응해야 한다.

#### 메세지

아이러니하게도 메세지가 결국은 객체를 결정하는 역할을 한다. 그 이유는 다음과 같다:

1. 객체가 최소한의 인터페이스를 가질 수 있게 된다.
2. 객체는 충분히 추상적인 인터페이스를 가질 수 있게 된다.

즉 '내가 뭘 해줄거야'는 느낌으로 구현하지 말고, '이놈은 혼자서 이걸 못해, 그러니까 저놈은 이놈한테 뭘 해줘야 하는 구나'같은 느낌으로 구현하라는 말이 되겠다.

### 책임

책임은 협력에 참여하기 위해 객체가 수행하는 행동을 말한다. 크게 '하는 것'과 '아는 것'으로 나눌 수 있다.

하는 것 
- 객체를 생성하거나 계산 수행하는 등의 스스로 하는것
- 다른 객체의 행동을 시작시키는 것
- 다른 객체의 활동을 제어하고 조절하는 것

아는 것
- 사적인 정보에 관해 아는것
- 관련된 객체에 관해 아는것
- 자신이 유도하거나 계산할 수 있는 것에 관해 아는것

#### 책임은 어떻게 할당되어야 하는가?

책임을 잘못할당하게 되면 객체의 자율성을 해친다. 그렇게 되면 변경 파급효과가 커지고, 결국 사회는 붕괴된다.

책임을 할당하는 가장 기본적인 방법은 가장 잘 아는 놈한테 그 일을 맡기는 것이다. 밑에서 나올 RDD가 이를 도와줄 수 있다.

### 역할

역할은 특정 협력에 참여하기 위한 책임의 집합이다. 이 역할을 적절하게 추상화시킨다면, 우리는 재사용 가능한 협력을 얻어낼 수 있다.

### Responsibility Driven Design

설계 순서는 다음과 같다.

1. 시스템이 사용자에게 제공해야 하는 기능인 시스템 책임을 파악한다.
2. 시스템 책임을 더 작은 책임으로 분할한다.
3. 분할된 책임을 수행할 수 있는 적절한 객체 또는 역할을 찾아 책임을 할당한다.
4. 객체가 책임을 수행하는 도중 다른 객체의 도움이 필요한 경우 이를 책임질 적절한 객체 또는 역할을 찾는다.
5. 해당 객체 또는 역할에게 책임을 할당함으로써 두 객체가 협력하게 한다.

얼핏 보면 당연한 순번이지만, 책임(What, 무엇을 해야 하는가)을 먼저 찾고, 그 후에 그에 맞는 객체(Who, 누가 해야 하는가)를
찾는다는 사실에 집중해야 한다. 특히 3, 4번을 진행하면서 이를 반복적으로 적용하는데, 이를 **What/who** 사이클이라고 부른다.

## 연결완전성

객체지향의 강력한 특징 중 하나다. 설계로부터 코드를 매끄럽게 이끌어 낼 수 있고, 이는 역으로도 성립한다. 즉 코드의 변경사항으로부터 설계(도메인 모델)의 어떤 부분이 바뀌었는지 알 수 있다.

## 객체지향의 핵심

Inheritance, Polymorphism, Encapsulation 은 객체지향의 핵심이 아니라 그저 매커니즘일 뿐이다.

정말 중요한 객체지향의 핵심은, Dependency Inversion을 통해 세부 구현사항으로부터 고수준 정책을 보호하는 것이다.

## SOLID

다음 5가지 원칙을 통해 객체지향의 핵심을 지킬 수 있다.

- SRP: Single Responsibility Principle
- OCP: Open Closed Principle
- LSP: Liskov Substitution Principle
- ISP: Interface Segregation Principle
- DIP: Dependency Inversion Principle

### SRP

객체는 한 가지 책임만을 지녀야 한다. 즉, 객체가 변경되는 사유가 단 하나여야 한다.

#### How?

다음과 같은 방법을 통해 SRP원칙을 적용해 볼 수 있다.

1. Inverted Dependency  
    클래스를 클래스와 인터페이스로 분리하고 이를 통해 디커플링 한다.  
    장점: 쉽다.  
    단점: 모든 메소드가 똑같은 인터페이스에 의존하고, 구현체 또한 하나의 클래스가 전부 가지고 있으므로 커플링되어 있다.
2. Extracted Classes  
    책임의 개수만큼 클래스를 분리한다.  
    장점: 쉽다.  
    단점: 개념이 분리된다. Transitive Dependency 문제가 생긴다.
3. Facade  
    구현부를 찾기 쉽게 책임을 Facade패턴으로 묶는다.  
    장점: 구현부를 찾기 쉽다.  
    단점: Actor들은 여전히 Facade 클래스 안에 Coupled되기 때문에 SRP가 위배된다. 
4. Interface Segregation  
    1번 패턴에서 인터페이스를 책임의 개수대로 분리한다.  
    장점: Actor들이 완전히 Decoupled된다.  
    단점: 하나의 클래스에 인터페이스 3개가 모두 구현되어 구현부에선 Coupled된다.
5. 1+2  
    1번과 2번 방법을 합쳐볼 수 있겠다.  
    장점: SRP를 지킬 수 있다.  
    단점: 구현을 어디서 하는 지 찾기 어렵다.

## OCP

객체는 확장에 대해서는 열려있되, 변경에 대해서는 닫혀있어야 한다. OCP는 시스템 아키텍쳐의 핵심이다.

#### How?

Abstraction과 Inversion을 통해 OCP 원칙을 지킬 수 있다.

#### 오해와 진실

OCP를 한다는 것은 변경을 대비한다는 것인데, 변경을 대비하면 불필요한 복잡도가 생기게 되므로 좋은 소프트웨어를 만들려는 의도와 달리
안좋은 소프트웨어를 만드는 모순이 생긴다.
결국 OCP는 미래를 완벽하게 예측하지 않고는 달성할 수 없고, 이것이 OCP 옹호자들이 숨기는 더러운 진실이다.

그러나 OCP가 마냥 터무니없는 이야기는 아니다. 애자일 개발 방법론을 통해 우리는 OCP를 소프트웨어에 적용할 수 있다.
변경을 예측하는 것이 아니라 짧은 주기로 경험함으로써 주기가 지날때마다 OCP가 지켜지는 소프트웨어를 만들어 낼 수 있도록 하는 것이다.

## LSP

LSP는 서브타입이 사용되는 어떤 경우에서도 상위 타입으로 교체가 가능해야 한다는 법칙이다.
즉, **오직 상속하고만 관련된 원칙**이다.
대부분의 경우에서 상속보다는 인터페이스를 사용하는 게 소프트웨어 설계 구조상 더 좋은데(특히 자칫하면 OCP가 깨지게 된다),
만약 꼭 상속을 사용해야 한다면 LSP를 준수하기 위해 노력해야 하겠다(LSP는 OCP를 지키면서 상속을 쓸 수 있게 해주는 도구라고 보면 된다).

이 때문에 Downcasting이 사용되거나 instanceof가 사용된다면 LSP를 어기고 있다는 징조로 여겨진다.
Subclass를 구별하고 있으니 말이다. 타입에 걸려있는 의존성은 가장 강하고 지독한 의존성이라고 한다.

### IS-A의 함정

현실세계에서 is-a 관계가 성립된다고 해서 SW세계에서도 is-a가 성립되는 것은 아니다. 대표적인 예가 바로 직사각형과 그 서브타입인 정사각형의 넒이를 구하는 문제.

### 왜 LSP를 어기게되는 경우 OCP가 깨지는가?

LSP를 어기게 되면 subtype이 supertype을 대체하지 못하므로 그 두 타입을 사용하는 곳에선 필수적으로 instanceof가 등장하게 된다.
이 경우 새로운 subtype이 등장했을 때 사용처의 코드가 수정되어야 하므로 확장이 닫힌 구조가 된다. 즉 OCP가 깨지게 되는 것이다.

## ISP

여러 모듈에게서 불려지는 Fat class의 경우 인터페이스를 사용해서 각 기능을 분리하라는 원칙이다. 이를 지키지 않으면 SRP가 깨질 염려가 있다.

## DIP

상위 레벨은 하위 레벨의 구현 상세에 의존해선 안된다. 이를 위해 Abstract Interface를 사용하고,
소스코드 의존성과 런타임 의존성의 방향을 반대로 바꿀 수 있다.

이러한 패턴을 Plugins 패턴이라고 하며, 인터페이스를 구현하는 곳이 Plugin point가 된다.
Plugin을 호출하는 곳은 구현 상세에 대해 모른다는 것이 특징이다.

### App partition & Main partition

계층이 나뉘는 부분을 Boundary라고 하는데, App partition은 Boundary를 교차하는 부분에 Interface를 제공하고,
Main parition은 해당 interface에 대한 구현 상세와 이 구현체의 의존성 주입을 담당한다.


---
객체지향의 사실과 오해 책을 읽고나서 시니어 개발자로부터 다음 질문을 받았는데 부끄럽게도 단 한 가지도 제대로 대답하지 못했다..

1. 객체지향의 핵심 3가지는 무엇인가.
    - 책임 협력 역할
    - 메시지
    - 추상화
2. 왜 클래스라 부르지 않고 인스턴스라고 부르는가.
3. 메시지란 무엇인가
    - 객체가 외부로부터 협력을 구하기 위한 수단.. 이라고 했는데 아니라고 하셨다. 뭐지..?
4. 왜 함수라 부르지 않고 메소드라고 부르는가.
5. 왜 인터페이스를 사용해야 하는가.