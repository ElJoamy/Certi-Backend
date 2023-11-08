# Certificacion Backend
## Que es Backend?
- Desarrollo y gestion de la logica de negocio, DB y funcionalidades del lado del servidor.
- Es como el esqueleto y el sistema nervioso de una aplicacion.
    
    - Logica de negocio
    - APIs
    - Autenticacion y Autorizacion
    - Gestion de DB
    - Seguridad

## Quien es un desarrollador backend?
- Es un desarrollador que se encarga de la logica de negocio, gestion de DB, APIs, escalabilidad y efeciencia, seguridad, etc.

## Rol y responsabilidades
- Diseño Arquitectura
- Eficacia y efiencia
- Privacidad de los datos
- Gestion de DB
- Despliegue CI/CD
- Testing

## Principios y acronimos de Desarrollo de Software
- SOLID 
    - Single Responsability Principle (SRP)
        - Concepto: Cada clase debe tener una sola responsabilidad.
        - Aplicacion en Java/Node.js: Cada clase debe tener una sola responsabilidad.

    - Open/Closed Principle (OCP)
        - Concepto: Las entidades de software deben estar abiertas para su extension, pero cerradas para su modificacion.
        - Aplicacion en Java/Node.js: Utilizar interfaces para definir contratos y clases abstractas para implementar comportamientos comunes.

    - Liskov Substitution Principle (LSP)
        - Concepto: Las clases derivadas deben ser substituibles por sus clases bases.
        - Aplicacion en Java/Node.js: Utilizar interfaces para definir contratos y clases abstractas para implementar comportamientos comunes.

    - Interface Segregation Principle (ISP)
        - Concepto: Los clientes no deben ser forzados a depender de interfaces que no usan.
        - Aplicacion en Java/Node.js: Utilizar interfaces para definir contratos y clases abstractas para implementar comportamientos comunes.

    - Dependency Inversion Principle (DIP)
        - Concepto: Las clases de alto nivel no deben depender de las clases de bajo nivel. Ambas deben depender de abstracciones.
        - Aplicacion en Java/Node.js: Utilizar interfaces para definir contratos y clases abstractas para implementar comportamientos comunes.

- KISS
    - KEEP IT SIMPLE STUPID (KISS) 
        - Concepto: Mantener las cosas simples.
        - Aplicacion en Java/Node.js: Mantener las cosas simples.
    
- DRY
    - DON'T REPEAT YOURSELF (DRY)
        - Concepto: No repetirte a ti mismo.
        - Aplicacion en Java/Node.js: No repetirte a ti mismo.

- YAGNI
    - YOU AIN'T GONNA NEED IT (YAGNI)
        - Concepto: No implementar funcionalidades que no se necesitan.
        - Aplicacion en Java/Node.js: No implementar funcionalidades que no se necesitan.

- TDD
    - Test Driven Development (TDD)
        - Concepto: Escribir primero las pruebas y luego el codigo.
        - Aplicacion en Java/Node.js: Escribir primero las pruebas y luego el codigo.

- BDD
    - Behavior Driven Development (BDD)
        - Concepto: Escribir primero las pruebas y luego el codigo.
        - Aplicacion en Java/Node.js: Escribir primero las pruebas y luego el codigo.





El proyecto en cuestión
Lyft está en proceso de desplegar una nueva flota de alquiler con la esperanza de fomentar ciudades más conectadas y sostenibles en todo Estados Unidos.

Tu equipo ha heredado un proyecto urgente de un compañero de Lyft que ha tenido que cambiar de proyecto. El colega estaba desarrollando un componente que utiliza el nuevo sistema logístico de la flota de alquiler. Desafortunadamente ese componente sólo se completó parcialmente y la responsabilidad de su equipo es ahora finalizar ese componente y hacerlo funcional.

El componente en sí es responsable de determinar si los coches de la nueva flota de alquiler de Lyft deben ser revisados cuando se devuelven. El trabajo que harás en este componente se llevará a cabo a través de cada una de las tareas dentro de este programa.

Antes de empezar, vamos a entender los criterios que el componente debe considerar.


Criterios para la revisión del coche
Si un coche de alquiler Lyft debe o no ser revisado depende de dos factores en este momento:

El motor; y
La batería.
Cada uno de los tres tipos de motor tiene sus propios criterios para determinar cuándo debe ser revisado. Lo mismo se aplica a cada tipo de batería.

Los criterios de servicio actuales son los siguientes:

<!-- haz una tabla para lo siguiente
 	Criterios de servicio
Motor Capulet Una vez cada 50.000 km
Motor Willoughby Una vez cada 100.000 km
Motor Sternman Sólo cuando el indicador de advertencia está encendido
Batería Spindler Una vez cada 2 años
Batería Nubbin Una vez cada 4 años
-->

Criterios de servicio
Motor | Criterios de servicio
--- | ---
Motor Capulet | Una vez cada 50.000 km
Motor Willoughby | Una vez cada 100.000 km
Motor Sternman | Sólo cuando el indicador de advertencia está encendido
Batería Spindler | Una vez cada 2 años
Batería Nubbin | Una vez cada 4 años

Hay cinco modelos de coche en la flota de Lyft, cada uno con una combinación diferente de motor y batería. Estos se describen a continuación:


<!-- Haz una tabla para lo siguiente 
coche   Motor   Batería
Calliope Capulet Motor Spindler Batería
Glissade Willoughby Motor Batería Spindler
Palíndromo Sternman Motor Spindler Batería
Rorschach Willoughby Motor Nubbin Batte
Batería de cubo de motor Thovex Capulet
-->

coche | Motor | Batería
--- | --- | ---
Calliope | Capulet | Motor Spindler Batería
Glissade | Willoughby | Motor Batería Spindler
Palíndromo | Sternman | Motor Spindler Batería
Rorschach | Willoughby | Motor Nubbin Batte
Batería de cubo de motor Thovex | Capulet | Motor Spindler Batería

Estos criterios de servicio cambiarán con cierta frecuencia en el futuro, y es inevitable que se incorporen nuevos modelos de vehículos a la flota. Esta es una consideración importante a lo largo del programa.

Teniendo esto en cuenta, es muy importante que el componente sea extensible y fácil de modificar, para que se puedan añadir nuevos criterios de servicio de forma rápida y eficaz. Hoy mismo, ha aprendido que el sistema también debe tener en cuenta los neumáticos a la hora de determinar si un coche debe ser revisado en el futuro.

Incorporar esta funcionalidad al sistema actual sería difícil y desordenado, por lo que se le ha pedido que se tome el tiempo necesario para refactorizar el código base antes de realizar el cambio. El primer paso de este proceso es redactar una nueva arquitectura (limpia) del sistema que permita la inclusión sin problemas de la nueva funcionalidad. Su tarea consiste en redactar y presentar un diagrama de clases que describa cómo se reorganizará el sistema.

Ahora que ya conocemos estos antecedentes, empecemos con la tarea.

Paso 1. Clonar el repositorio Clonar el repositorio
Para empezar a trabajar en el componente inacabado, necesitamos clonar el repositorio de inicio en tu máquina.

En este paso, necesitarás clonar el siguiente repositorio a tu máquina: https://github.com/vagabond-systems/forage-lyft-starter-repo

Una instrucción paso a paso sobre cómo hacer esto se describe aquí en GitHub: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

Una vez que hayas clonado el repositorio, vamos al siguiente paso.

Aquí tienes algunos recursos que te ayudarán
Algunos términos clave utilizados aquí:

Un repositorio (o "repo") contiene todos los archivos de tu proyecto y el historial de revisiones de cada archivo. Puedes discutir y gestionar el trabajo de tu proyecto dentro del repositorio. GitHub

Puedes clonar un repositorio desde GitHub.com a tu ordenador local para que sea más fácil arreglar conflictos de fusión, añadir o eliminar archivos y enviar confirmaciones más grandes. Cuando clonas un repositorio, lo copias de GitHub.com a tu ordenador local.

Si este paso te resulta complicado, lee los dos primeros capítulos de este libro sobre git: https://git-scm.com/book/en/v2

Segundo paso. Familiarícese con el código base
El repositorio que acabas de clonar contiene la funcionalidad principal del componente de servicio de flota mencionado anteriormente.

Con el fin de llegar a un mejor diseño, primero debe comprender plenamente el estado actual de la base de código. Dedique algún tiempo a leer cada archivo y averiguar cómo están organizadas las cosas.

Sería útil dibujar cómo las clases se relacionan actualmente entre sí.

Paso 3. Redactar una nueva arquitectura
En este último paso de la tarea, redactará un diagrama de clases UML que represente una nueva arquitectura reorganizada.

Ahora que conoce bien el sistema actual, piense en la mejor manera de reorganizarlo. Su plan debe permitir una fácil extensibilidad en el futuro. Debe ser fácil para los futuros miembros del equipo añadir nuevos criterios de servicio y cambiar qué piezas incluye cada modelo de coche (por ejemplo, cambiar la batería instalada en el Thovex de una Nubbin a una Spindler).

Además, para modificar los criterios de servicio de un determinado recambio sólo será necesario hacerlo en un lugar. Si tienes problemas para idear un buen diseño, echa un vistazo a los siguientes recursos:

https://en.wikipedia.org/wiki/Composition_over_inheritance
https://sourcemaking.com/design_patterns/behavioral_patterns
https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/

Una vez que tenga una idea de cómo organizar el sistema, redacte y envíe su diagrama de clases UML. La intención de este diagrama de clases es mostrar un diseño mejorado, preocúpate menos de la sintaxis UML adecuada.

Cuando haya terminado, convierta su diagrama de clases en un PDF y envíelo a continuación.

Si te quedas atascado, vamos a proporcionar alguna orientación en el siguiente paso sobre cómo un ingeniero Lyft habría completado la tarea. Pero te animamos a que lo intentes primero.

Tiempo estimado para completar la tarea: 1 hora dependiendo de tu estilo de aprendizaje.