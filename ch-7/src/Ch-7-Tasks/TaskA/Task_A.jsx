import React from 'react'
import WithLoader from './withLoader'
import { CircleLoader } from 'react-spinners'

const Task_A = ({ data, loading }) => {

  return (
    <>

        <CircleLoader loading={loading}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
          size={50} />
     

      <div className="container">
        {
          data.map((item, index) => {
            return (
              <li key={index}>{item.email}</li>
            )
          })
        }
      </div>
    </>
  )
}
export default WithLoader(Task_A)