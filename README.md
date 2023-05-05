# SISTEMA DE MENSAJERIA

# Instrucciones
Para ejecutar el proyecto es necesario crear un la raíz de la carpeta api un archivo .env que tenga una variable de entorno que sea PORT= **** ,que hace referencia al puerto en el que corre el servidor.
Y tambien cambiar el uri de  "mongoDB", que esta ubicado en ("/database/config.ts"), por tu uri asi vas a ver los cambios en tu cluster
## Ejecución
Con el comando  npm start ubicado en la carpeta test-api ya podras ejecutar el proyecto

## Rutas
Las rutas dependerán de la variable que asigne en la variable PORT en el archivo . env , por ejemplo (http://localhost:${PORT})

## Rutas de Chat

## POST (http://localhost:${PORT}"/api/chats")

Esta ruta sirve para crear primero el customer y una vez creado con su respectivo rol, se crea un chat con un id unico para tener conversacion con ese customer y ademas se crea el primer mensaje.
Para ejecutarlo copiar la ruta en su plataforma de api favorita (postman,thunderclient,etc) , y en el body copiar el siguiente ejemplo.

{
       "customer":{
        "firstName":"santino",
        "lastName":"ursino",
        "role":"vipCustomer",
        "creditCard": "123456789"
    },
    "text": "hola Santino",
    "location":[ -111.000 , 40.000 ]

}

![muestra_post_chats](/images/muestra_post_chats.png)
![muestra_chats_mongo](/images/muestra_chats_mongo.png)
![muestra_customers_mongo](/images/muestra_customers_mongo.png)
![muestra_messages_mongo](/images/muestra_messages_mongo.png)

## GET (http://localhost:${PORT}"/api/chats")

Esta ruta te trae todos los chats

![muestra_get_chats](/images/muestra_get_chats.png)

## PUT (http://localhost:${PORT}"/api/chats/:id")

Esta ruta sirve para actualizar el campo "isFavourite" el cual lo cambia el administrador para asi poder asignar un chat como favorito o no.
El "/:id" hace referencia al valor de id que va a tener cada chat que vos quieras cambiar, eso lo vas a ver reflejado en la base de datos cada chat representa un customer diferente y tiene un id diferente.

![muestra_put_chats](/images/muestra_put_chats.png)

## Delete (http://localhost:${PORT}"/api/chats/:id")

Esta ruta sirve para eliminar un chat por su ID

![muestra_delete_chats](/images/muestra_delete_chats.png)
![muestra_chats_delete_mongo](/images/muestra_chats_delete_mongo.png)


## Rutas de Message

## POST (http://localhost:${PORT}"/api/message/"chatId")


Esta ruta sirve para enviar mensajes a un chat especifico. Por ejemplo si te queres comunicar con alguien de la empresa buscas su chatId y lo pegas en la ruta, y posteriormente le envias el mensaje en el body de tu plataforma de api favorita.
Aca se ve que se creo el customer Santino y tiene un ID respectivo, y posteriormente se va a ver que en el chat va a aparecer el id de Santino y el id de su Chat.
![customer_santino](/images/customer_santino.png)
![id_customer_santino](/images/id_customer_santino.png)
Si el chatId de Santino es = "63abf424d0345cd70bd76cc3", entonces la ruta quedaria
(http://localhost:${PORT}"/api/"63abf424d0345cd70bd76cc3")

Y en el body pegarias=
{
 "text": "Hola Santino, estas contratado!",
    "location":[ -111.000 , 40.000 ]

}

![muestra_post_message](/images/muestra_post_message.png)


## Get (http://localhost:${PORT}"/api/message)

Esta Ruta te trae todo los messages de todos los chats para que los puedas ver.

![muestra_get_message](/images/muestra_get_message.png)
