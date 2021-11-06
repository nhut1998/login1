import React from 'react'

export default class Todolist extends React.Component {
  state = {
    items: [],
    text: '',
    status: 'all',
    toggle: false
  }

  onHandleChange(e) {
    this.setState({ text: e.target.value })
  }

  onHandleSubmit(e) {
    e.preventDefault()

    if (this.state.text.length !== 0) {
      const cloneText = {
        textClone: this.state.text,
        id: Date.now(),
        isComplete: false
      }

      // const clone = [...this.state.items]
      // clone.push(cloneText)

      // this.setState({ items: clone, text: '' })

      this.setState({
        items: [...this.state.items, cloneText],
        text: ''
      })
    }
  }

  onHandleDelete(id) {
    // const filteredArr = this.state.items.filter(item => {
    //     return item.id !== id
    // })
    // this.setState({ items: filteredArr })

    this.setState({ items: this.state.items.filter(item => item.id !== id) })
  }

  onHandleAddClass(id) {
    const cloneItems = [...this.state.items]
    const idxFound = cloneItems.findIndex(item => item.id === id)
    cloneItems[idxFound].isComplete = !cloneItems[idxFound].isComplete

    this.setState({ items: cloneItems })

  }

  onDeleteDone() {
    this.setState({ items: this.state.items.filter(item => item.isComplete === false) })
  }

  onChangeStatus(newStatus) {
    this.setState({ status: newStatus })
  }

  changeAll() {
    const isAllTrue = this.state.items.every(item => item.isComplete === true)

    // if (isAllTrue) {
    //     this.setState({ items: this.state.items.map(item => {
    //         return {...item, isComplete: !item.isComplete }
    //     }) })
    // } else if (!isAllTrue) {
    //     this.setState({ items: this.state.items.map(item => {
    //         return {...item, isComplete: true}
    //     }) })
    // }

    if (isAllTrue) {
      this.setState({
        items: this.state.items.map(item => {
          return { ...item, isComplete: !item.isComplete }
        })
      })
    } else if (!isAllTrue) {
      this.setState({
        items: this.state.items.map(item => {
          return { ...item, isComplete: true }
        })
      })
    }
  }

  render() {
    const { items, text, status, toggle } = this.state
    return (
      <React.Fragment>
        <button onClick={() => this.changeAll()}>CheckAll</button>
        <div className="form-group">
          <form onSubmit={(e) => this.onHandleSubmit(e)}>
            <input
              type="text"
              className="form-control"
              id="input-todo"
              value={text}
              placeholder="What do you want to do ?"
              onChange={(e) => this.onHandleChange(e)}
            />
          </form>
        </div>
        <section>
          {
            items.reduce((newArr, item) => {
              const renderedArr = <div className='adjustPlace' key={item.id}>
                <input type='checkbox' id='checkbox' checked={item.isComplete} onClick={() => this.onHandleAddClass(item.id)} />
                {
                  toggle
                    ? <input />
                    : <p className={`Todo-item ${item.isComplete ? 'todoComplete' : ''}`}>{item.textClone}</p>
                }
                <button className='btn-danger' onClick={() => this.onHandleDelete(item.id)}>X</button>
              </div>
              if (status === 'all' || status === item.isComplete) {
                newArr.push(renderedArr)
              }
              return newArr
            }, [])
          }
        </section>
        <div className='marginBtns'>
          <button onClick={() => this.onChangeStatus('all')}>All</button>
          <button onClick={() => this.onChangeStatus(false)}>Not Done</button>
          <button onClick={() => this.onChangeStatus(true)}>Done</button>
          <button onClick={() => this.onDeleteDone()}>Delete completed items</button>
        </div>
      </React.Fragment>
    )
  }
}


