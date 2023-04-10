// Um array vai ser usado para salvar as naves de forma mais simplificada
const spaceships = []

/**
 * Funções Principais
 */

function addSpaceship(name: string, pilot: string, crewLimit: number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false
  }

  spaceships.push(spaceship)
  
  alert(`A nave ${spaceship.name} foi registrada.`)
}