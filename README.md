# rickandmorty

### Usa la API de Rick and Morty para probar tus habilidades 🥼

Tienes que consultar todos los `character`, `locations` y `episodes` de [https://rickandmortyapi.com/](https://rickandmortyapi.com/) e indicar:

1. Char counter:
    - cuántas veces aparece la letra **"l"** (case insensitive) en los nombres de todos los `location`
    - cuántas veces aparece la letra **"e"** (case insensitive) en los nombres de todos los `episode`
    - cuántas veces aparece la letra **"c"** (case insensitive) en los nombres de todos los `character`
    - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)
2. Episode locations:
    - para cada `episode`, indicar la cantidad y un listado con las `location` (`origin`) de todos los `character` que aparecieron en ese `episode` (sin repetir)
    - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)
    
    ###La idea era resolver con el challenge y además ponerle mi propia impronta (al ser fan del programa, me vi atraido a resolver el Challenge.)
    
    Siendo una app que tan solo iba a hacer pedidos a una api externa, decidí ir por una de las tecnologías "serverless" más importantes de la actualidad Next.js.
    
    Next al renderizar del lado del servidor, nos deja ser visibles para los bots de búsqueda y mejorar nuestro posicionamiento comercial. 
    También nos permite dos maneras de hacer pedidos, al ser información estática y para su mejor rendimiento opté por realizar pedidos mediante getStaticProps. 
    
    Allí dentro encadené las promesas necesarias para cumplir con las primeras tres consigas del challenge.
    
    La última consigna decidí resolverla mediante un Select, que al cambiar de valor, desencadena otro encadenamiento de Promesas que resuelve la última consigna. 
    Por último para no repetir los planetas de origen me valí de una de las últimas actualizaciones ES6: let uniqueArray=[…new Set( array )].
    
    En conclusióm, disfrute mucho realizando este challenge... gracias! 
    Espero que estemos en contacto!
    Tomás Pinto Kramer.
