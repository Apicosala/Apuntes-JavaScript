import uuid4 from "uuid4";

class Curso {
    #id;
    #name;
    #students = [];

    constructor(name) {
        this.#name = name;
        this.#id = uuid4(); // https://www.npmjs.com/package/uuid4 me crea un id aleatori
    }

    getid = () => {
        return this.#id;
    }
    getname = () => {
        return this.#name;
    }
    setstudents = (student) => {
        return this.#students = [...this.#students, student];
    }
    getstudents = () => {
        return this.#students;
    }

}



export default Curso;