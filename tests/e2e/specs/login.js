describe('Login', () => {
    it('Acepta valores y muestra el resultado', () => {
      cy.visit('/');
      cy.contains('h1', 'Login');
      let email = "user@user.com";
      let password = "123456";
      cy.get('[data-cy="inputCorreo"]').type(email).should('have.value',email);
      cy.get('[data-cy="inputPassword"]').type(password).should('have.value',password);
      cy.get('[data-cy="formularioEntrar"]').submit();
      cy.get('#mensajeError').should('not.be.visible');
      cy.contains('h1', 'Bienvenido a tu Home');
      cy.contains('p', 'user@user.com');
      cy.get('[data-cy="boton-salir"]').click();
      cy.window().then((win) => {
        console.log(win.location)
      })
      cy.location('href').should('equal', 'http://localhost:8081/login');
    })
});