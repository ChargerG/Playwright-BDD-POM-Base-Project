Feature: Ejemplo de flujo BDD MCP Playwright

  @RCA-T11111
  Scenario: Abrir la página de Facebook y diligenciar un email y contraseña inválidos
    Given el usuario ingresa a la página de Facebook
    When el usuario diligencia un email y contraseña inválidos
    Then debe aparecer un mensaje de error
