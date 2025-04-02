# typescript-and-json-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is JSON?
  JSON stands for `JavaScript Object Notation`, a data interchange format that allows you to encode JavaScript/TypeScript objects (otherwise unable to be sent to different servers) in a way that can be easily sent to different servers and then later decoded.

- What are serialization and deserialization?
  `Serialization` is the process of turning JavaScript objects into a structure that can be stored, transmitted, and reconstructed later (in the case of JSON, turning data into a string.)

`Deserialization` would be turning the serialized string JSON data back into regular JavaScript/Typescript: object literals, arrays, etc.

- Why are serialization and deserialization useful?
  Serialization and deserialization are useful as it allows you to encode and send JavaScript to different servers or databases, and then lets you or the end user reconstruct and read data on this new server/database.

- How do you serialize a data structure into a JSON string using TypeScript?
  You serialize a data structure into a JSON String using the `JSON.stringify()` method.

- How do you deserialize a JSON string into a data structure using TypeScript?
  You deserialize a data structure using the `JSON.parse()` method.
