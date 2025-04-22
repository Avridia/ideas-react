import { useNavigate } from 'react-router-dom'

import '../css/profile.css'

import Menu from '../components/Menu'



function Profile() {

  const navigate = useNavigate()

  return (
    <div className="profile_page">
        <h2>Mi perfil</h2>
        <section className="profile_info">
            <ul>
                <li>
                    <div className="profile_name_container">
                        <div className="read_name profile_field">Nombre de usuario</div>
                        <div className="profile_field">Minombre</div>
                        <input type="text" className="invisible profile_field"/>
                        <div className="change_save">
                            <button className="change_button">Modificar usuario</button>
                            <input type="submit" className="invisible" value="Guardar"/>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="profile_photo_container">
                        <div className="read_photo profile_field">Foto de perfil</div>
                        <div className="photo_inputs profile_field">   
                            <img src="img/avatars/avatar_1.png" />
                            <div className="change_photo invisible">
                                <input type="file" />
                            </div>
                            <div className="change_save">
                                <button className="change_button">Modificar foto</button>
                                <input type="submit" className="invisible" value="Guardar" />
                            </div>
                        </div> 
                    </div>
                </li>
                <li>
                    <div className="profile_mail_container">
                        <div className="read_mail profile_field">Correo electrónico</div>
                        <div className="profile_field">correo@gmail.com</div>
                    </div>
                </li>
            </ul>
        </section>
        <Menu />
    </div>
  )
}

export default Profile