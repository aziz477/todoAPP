import React from "react";
import './FormTask.css';



class Task extends React.Component {

    constructor() {
        super()
        this.state = {
            input: "",
            items: [{text: 'mouadh', isCompleted: false}, {text: 'anas', isCompleted: false}, {
                text: 'hassanet',
                isCompleted: false
            }]

        };

        this.handleChange = this.handleChange.bind(this)

    }

    addItems() {

        this.setState({

            items: [...this.state.items, {text: this.state.input}]

        })}

    handleChange(event) {

        this.setState({
            input: event.target.value
        })

    }

    delete(id){


            let newTab=this.state.items;
        newTab.splice(id, 1);
        this.setState({items:newTab });


    }

  handleClick(id){

        this.setState({

            items:this.state.items.map((element,index)=>(index===id)? {...element,isCompleted:!element.isCompleted} : element)

        })




  }






    render() {

        return(

            <div className="main">


                <div className="formTask">

                    <h1>To Do App !</h1>
                    <p>add new todo </p>
                    <input type="text"  value={this.state.input}  onChange={this.handleChange}  placeholder="enter new task "/>
                    <input type="button" className="add" value="add" onClick={()=>this.addItems()}/>


                </div>




                <div className="resultat">

                    {this.state.items.map((element,index)=>

                        <div>

                            <button onClick={()=> this.handleClick(index)}>{(element.isCompleted)? 'undo' : 'complete'} </button>
                            <button onClick={()=> this.delete(index)}>delete</button>

                            <p style={{textDecoration:(element.isCompleted)? 'line-through':''}}>{element.text}</p>

                        </div>

)
                    }


                </div>
            </div>


        )
    }

}export default Task;
