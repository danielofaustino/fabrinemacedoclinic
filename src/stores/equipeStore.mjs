
import { writable } from 'svelte/store';
import { equipeData } from './equipe.mjs';
export const equipe = writable([]);
export let equipeLoading = true

const fetchEquipeData = async () => {

  try {
    setTimeout(() => {
      equipe.set(equipeData);
      equipeLoading = false
      console.log(equipeData)
    }, 1000)


    console.log("lading status", equipeLoading)
  } catch (error) {

    console.log("lading status", equipeLoading)
    console.log(error)
  }

};

fetchEquipeData();
