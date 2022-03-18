/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Tuesday, February 25nd 2022, 10:49:41 pm
 * Year 2022
 */


const Introduction = ({initialize}) => {

  return (
    <div className='text-center h-screen bg-black text-white apple'>
        <div className="pt-12 font-black text-5xl">
                Intelligent
        </div>
        <div className='text-white tracking-widest'>
        SEARCH
      </div>
        
  
      <div className='text-white text-center pt-4 mx-8 text-sm decoration-dotted font-light'>
            AI Semantic search over a set of documents which means that you can provide a query such as a natural language question
          or a statement, and the provided query will be scored and ranked based on how semantically related they are to the input query.
      </div>

      <div className='text-white text-center mt-8'>
      Answer are based on existing knowledge.
      </div>

      
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-16 py-2 mt-8 rounded"
        onClick={initialize}>Initialize Search</div>

      <div className='text-white text-center font-medium mt-5 text-sm'>
        Powered by<br />
        <p className='font-light'>Generative Pre-trained Transformer 3</p>
      </div>

      

      

      <div className='text-white text-center mx-8 pt-8 mx-8 text-sm decoration-dotted font-light'>
      GPT-3 is an advanced AI system that produces natural language text by predicting what comes next in a text sequence. It's one of the largest neural networks available, with 175 billion parameters. GPT-3 was trained with large amounts of information from the internet.
      </div>

      <div className='text-white text-center font-light mt-5 text-sm'>
        Design & Developed by<br />
        <p className='font-medium'>Amarjit Pheiroijam</p>
      </div>

      
    
    </div >
  )
}

export default Introduction;