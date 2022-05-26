
import { writable } from 'svelte/store';
import { cursoData } from './cursos.mjs';
export const cursos = writable([]);
export let cursoLoading = true

const fetchCursoData = async () => {

  try {
    setTimeout(() => {
      cursos.set(cursoData);
      cursoLoading = false

    }, 1000)



  } catch (error) {


    console.log(error)
  }

};

fetchCursoData();
