import './App.scss'

function App() {

  return (
    <>
      <div className="Buttons">

        <button className="Button intent-primary">Default Primary Button</button>
        <button className="Button intent-success">Default Success Button</button>
        <button className="Button intent-warning">Default Warning Button</button>
        <button className="Button intent-danger">Default Danger Button</button>

        <button className="Button intent-primary style-raised">Raised Primary Button</button>
        <button className="Button intent-success style-raised">Raised Success Button</button>
        <button className="Button intent-warning style-raised">Raised Warning Button</button>
        <button className="Button intent-danger style-raised">Raised Danger Button</button>

        <button className="Button intent-primary style-minimal">Minimal Primary Button</button>
        <button className="Button intent-success style-minimal">Minimal Success Button</button>
        <button className="Button intent-warning style-minimal">Minimal Warning Button</button>
        <button className="Button intent-danger style-minimal">Minimal Danger Button</button>

        <button className="Button intent-primary style-outlined">Outlined Primary Button</button>
        <button className="Button intent-success style-outlined">Outlined Success Button</button>
        <button className="Button intent-warning style-outlined">Outlined Warning Button</button>
        <button className="Button intent-danger style-outlined">Outlined Danger Button</button>

      </div>
    </>
  )
}

export default App
