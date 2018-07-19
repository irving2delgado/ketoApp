import React, {Component} from 'react';

class RecipeInput extends Component {
    static defaultProps = {
        onClose() {}
    }
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            instructions: "",
            ingredients: [''],
            img: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {title, instructions, img, ingredients} = this.state;
        const {onClose} = this.props;
        let inputs  = ingredients.map((ing, i) => (
            <div
                className="recipe-form-line"
                key={`ingredient-${i}`}
            >
                <label>
                    <input
                    type="text"
                    name={`ingedient-${i}`}
                    value={ing}
                    size={45}
                    autoComplete=" off"
                    placeholder= " Ingredient"
                    onChange={() => {}} />
                </label>
            </div>
        ));

        return (
            <div className="recipe-form-container">
                <form className='recipe-form' onSubmit={this.handleChange}>
                    <button
                    type="button"
                    className="close-button"
                    onClick={onClose}
                    >
                    X
                    </button>
                <div className='recipe-form-line'>
                    <label htmlFor='recipe-title-input'>Title</label>
                    <input
                        id='recipe-title-input'
                        key='title'
                        name='title'
                        type='text'
                        value={title}
                        size={42}
                        autoComplete="off"
                        onChange={this.handleChange}/>
                </div>
                <label
                htmlFor='recipe-instructions-input'
                style={{marginTop: '5px'}}
                >
                    Instructions
                </label>
                <textarea 
                key='instructions'
                id='recipe-instructions-input'
                type='Instructions'
                name='instructions'
                rows='8'
                cols='50'
                autoComplete='off'
                value={instructions}
                onChange={this.handleChange}/>
                {inputs}
                <button
                type="button"
                onClick={this.handleNewIngredient}
                className="buttons"
                >
                    +
                </button>
                

        )
    }
}

export default RecipeInput;