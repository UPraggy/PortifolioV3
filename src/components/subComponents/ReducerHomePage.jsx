const preencheInfo = (state, action)=>{ 
    //UseReducer -> um useState  porém com inumeras variaveis e funções, no caso esse para 
    //cadastro de produtos
    switch(action.type){
        case "nomeResponsivo1Pagina":
            return{
                ...state,
                nomeResponsivo1Pagina: action.value
            };

        case "componentesTranslate":
            return{
                ...state,
                componentesTranslate: action.value
            };
        default:
            return state;
            
        }
    }
    
export default {preencheInfo};