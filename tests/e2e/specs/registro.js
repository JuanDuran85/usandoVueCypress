describe('Login', () => {
    it('Acepta valores y muestra el resultado', () => {

      cy.visit('/');
      cy.get('[data-cy="rutaRegistro"]').click();
      cy.contains('h1', 'Registro de Usuario');
      cy.location('href').should('equal', 'http://localhost:8081/registro');
      
      let email = "user2@user2.com";
      let password = "123456";
      cy.get('#exampleInputEmail1').type(email).should('have.value',email);
      cy.get('#exampleInputPassword1').type(password).should('have.value',password);
      cy.get('form').submit();
      
      cy.location('href').should('equal', 'http://localhost:8081/home');

      cy.contains('p', 'user2@user2.com');
      cy.get('[data-cy="salidaUser"]').should('be.visible');
      cy.get('[data-cy="salidaUser"]').click();

      cy.location('href').should('equal', 'http://localhost:8081/login');
    })
});