import React from 'react';
import * as componentes from './componentes';

  function App() {
    const [signIn, toggle] = React.useState(true);
     return(
         <componentes.Container>
             <componentes.SignUpContainer signinIn={signIn}>
                 <componentes.Form>
                     <componentes.Title>Crear Cuenta</componentes.Title>
                     <componentes.Input type='text' placeholder='Nombre' />
                     <componentes.Input type='text' placeholder='Direccion' />
                     <componentes.Input type='email' placeholder='Email' />
                     <componentes.Input type='password' placeholder='Contraseña' />
                     <componentes.Button>Crear Cuenta</componentes.Button>
                 </componentes.Form>
             </componentes.SignUpContainer>
  
             <componentes.SignInContainer signinIn={signIn}>
                     <componentes.Form>
                         <componentes.Title>Iniciar Sesion</componentes.Title>
                         <componentes.Input type='email' placeholder='Email' />
                         <componentes.Input type='password' placeholder='***********' />
                         <componentes.Anchor href='#'>¿Olvidaste tu Contraseña?</componentes.Anchor>
                         <componentes.Button>Iniciar Sesion</componentes.Button>
                     </componentes.Form>
                </componentes.SignInContainer>
        
                <componentes.OverlayContainer signinIn={signIn}>
                    <componentes.Overlay signinIn={signIn}>
  
                    <componentes.LeftOverlayPanel signinIn={signIn}>
                        <componentes.Title>Bienvenido</componentes.Title>
                        <componentes.Paragraph>
                            Hola xd
                        </componentes.Paragraph>
                        <componentes.GhostButton onClick={() => toggle(true)}>
                            Iniciar Sesion
                        </componentes.GhostButton>
                        </componentes.LeftOverlayPanel>
  
                        <componentes.RightOverlayPanel signinIn={signIn}>
                          <componentes.Title>¡Hola, Gamer!</componentes.Title>
                          <componentes.Paragraph>
                              Estas comprando cosas sol@? Hay comprador@s madur@s a 5km de tí
                          </componentes.Paragraph>
                              <componentes.GhostButton onClick={() => toggle(false)}>
                                  Registrarte
                              </componentes.GhostButton> 
                        </componentes.RightOverlayPanel>
                        </componentes.Overlay>
                </componentes.OverlayContainer>
  
            </componentes.Container>
        )
   }
  
   export default App;
