import React, { useCallback } from 'react'
import { useHistory } from "react-router-dom";
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'

const SortableItem = SortableElement(({ ques, remove, toEdit }) =>
  <tr>
    <td>{ques.id}</td>
    <td>{ques.content}</td>
    <td>
      <button className='btn btn-danger' onClick={() => { remove(ques.id) }}>Delete</button>
      <button className='btn btn-primary ms-2' onClick={() => { toEdit(ques.id) }}>Edit</button>
    </td>
  </tr>
)

const SortableList = SortableContainer(({ questions, remove, toEdit }) => {
  return (
    <tbody>
      {
        questions.map((ques, index) => (
          <SortableItem key={`item-${ques.id}`} index={index} ques={ques} remove={remove} toEdit={toEdit} />
        ))
      }
    </tbody>
  );
});

export default function List({ questions, remove, setQuestions }) {
  const history = useHistory()

  const toCreate = () => {
    history.push('/admin/create')
  }

  const toEdit = useCallback(id => {
    history.push(`/admin/${id}/edit`)
  }, [history])

  const onSortEnd = useCallback(({ oldIndex, newIndex }) => {
    setQuestions(arrayMove(questions, oldIndex, newIndex));
  }, [questions, setQuestions])

  return (
    <div className='container'>
      <div className='d-flex align-items-end justify-content-between'>
        <div className='display-4'>List</div>
        <button className='btn btn-success' onClick={toCreate}>Create</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Tên phim</th>
            <th scope="col">Ngày đặt</th>
            <th scope="col">Giá vé</th>
            <th scope="col">Hệ thống rap</th>
            <th scope="col">Rap</th>
            <th scope="col">Số ghế</th>
            <th scope="col">Tổng tiền</th>
          </tr>
        </thead>
       
      </table>
    </div>
  )
}
