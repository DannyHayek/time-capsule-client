import React from 'react'

const BackgroundImage = () => {
  return (
    <div className='auth-image flex'>
      <aside className='auth-form-background'>

        <section>
          <form className='flex column flex-center'>
            <label className='auth-label'>Email</label>
            <input></input>
            <label className='auth-label'>Password</label>
            <input></input>
          </form>
        </section>
        
        <section>
          <button>
            Login
          </button>
        </section>
      </aside>
    </div>
  )
}

export default BackgroundImage;