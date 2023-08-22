import { useEffect } from 'react'
import useProyectos from '../hooks/useProyectos'
import { useParams } from 'react-router-dom';
import FormularioProyecto from '../components/FormularioProyecto';

const EditarProyecto = () => {
  const params = useParams();
  const { obtenerProyecto, proyecto, cargando } = useProyectos()

  useEffect( () => {
    obtenerProyecto(params.id)
  }, [])

  const { nombre } = proyecto

  if(cargando) return 'Cargando...'

  return (
    <>   
      <div className='flex justify-between'>
        <h1 className='font-black text-4xl'>Editar Proyecto: {nombre}</h1>
      </div>

      <div className="mt-10 flex justify-center">
        <FormularioProyecto />
      </div>
    </>  
  )
}

export default EditarProyecto