import headerStyles from '../src/styles/Header.module.css'


const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}><span>Web Dev</span> News</h1>
        <p className={headerStyles.description}>keep up to date blah blah lorem10</p>
        {/* <style jsx>
            {`
                .title {
                    color: red
                }
            `}
            // This is good for conditional rendering as well since you can write ${ inline } 
        </style> */}
    </div>
  )
}

export default Header