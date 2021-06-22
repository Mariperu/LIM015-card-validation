import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {  
      expect(validator.isValid("4083952015263")).toBe(true); 
    });

    it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid("79927398713")).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid("1234567890")).toBe(false);
    });
  });


  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify("4556364607935616")).toBe("############5616");
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify("1")).toBe("1");
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(validator.maskify("helloworld")).toBe("######orld");
    });
  });


  describe('validator.getIssuer', () => {
    it('debería ser una función', () => {
      expect(typeof validator.getIssuer).toBe('function');
    });
    
    it('debería retornar "No existe" para "789123456789"', () => {
      expect(validator.getIssuer("789123456789")).toBe("No existe");
    });

    it('debería retornar "VISA" para "4766112373743631"', () => {
      expect(validator.getIssuer("4766112373743631")).toBe("VISA");
    });

    it('debería retornar "MasterCard" para "5104897433035846"', () => {
      expect(validator.getIssuer("5104897433035846")).toBe("MasterCard");
    });

    it('debería retornar "MasterCard" para "5204897433035846"', () => {
      expect(validator.getIssuer("5204897433035846")).toBe("MasterCard");
    });

    it('debería retornar "MasterCard" para "5304897433035846"', () => {
      expect(validator.getIssuer("5304897433035846")).toBe("MasterCard");
    });

    it('debería retornar "MasterCard" para "5404897433035846"', () => {
      expect(validator.getIssuer("5404897433035846")).toBe("MasterCard");
    });

    it('debería retornar "MasterCard" para "5504897433035846"', () => {
      expect(validator.getIssuer("5504897433035846")).toBe("MasterCard");
    });

    it('debería retornar "American Express" para "346184332823496"', () => {
      expect(validator.getIssuer("346184332823496")).toBe("American Express");
    });

    it('debería retornar "American Express" para "376184332823496"', () => {
      expect(validator.getIssuer("376184332823496")).toBe("American Express");
    });

    it('debería retornar "Discover" para "6011537426117854"', () => {   
      expect(validator.getIssuer("6011537426117854")).toBe("Discover");
    });
    
    it('debería retornar "Diners Club /International" para "36123456789"', () => {   
      expect(validator.getIssuer("36123456789")).toBe("Diners Club /International");
    });
    
    it('debería retornar "Diners Club /Carte Blanche" para "38123456789"', () => {   
      expect(validator.getIssuer("38123456789")).toBe("Diners Club /Carte Blanche");
    });

    it('debería retornar "Diners Club /Carte Blanche" para "305123456789"', () => {   
      expect(validator.getIssuer("305123456789")).toBe("Diners Club /Carte Blanche");
    });

    it('debería retornar "Diners Club /Carte Blanche" para "304123456789"', () => {   
      expect(validator.getIssuer("304123456789")).toBe("Diners Club /Carte Blanche");
    });

    it('debería retornar "Diners Club /Carte Blanche" para "303123456789"', () => {   
      expect(validator.getIssuer("303123456789")).toBe("Diners Club /Carte Blanche");
    });

    it('debería retornar "Diners Club /Carte Blanche" para "302123456789"', () => {   
      expect(validator.getIssuer("302123456789")).toBe("Diners Club /Carte Blanche");
    });

    it('debería retornar "Diners Club /Carte Blanche" para "301123456789"', () => {   
      expect(validator.getIssuer("301123456789")).toBe("Diners Club /Carte Blanche");
    });

    it('debería retornar "Diners Club /Carte Blanche" para "300123456789"', () => {   
      expect(validator.getIssuer("300123456789")).toBe("Diners Club /Carte Blanche");
    });
    
    it('debería retornar "Diners Club /enRoute" para "2014123456789"', () => {   
      expect(validator.getIssuer("2014123456789")).toBe("Diners Club /enRoute");
    });

    it('debería retornar "Diners Club /enRoute" para "2149123456789"', () => {   
      expect(validator.getIssuer("2149123456789")).toBe("Diners Club /enRoute");
    });

    it('debería retornar "JCB" para "2131123456789"', () => {   
      expect(validator.getIssuer("2131123456789")).toBe("JCB");
    });
    
    it('debería retornar "JCB" para "3559959573038003"', () => {   
      expect(validator.getIssuer("3559959573038003")).toBe("JCB");
    });

    it('debería retornar "JCB" para "1800959573038003"', () => {   
      expect(validator.getIssuer("1800959573038003")).toBe("JCB");
    });
    
    it('debería retornar "Discover" para "6011959573038003"', () => {   
      expect(validator.getIssuer("6011959573038003")).toBe("Discover");
    });

    it('debería retornar "Banco desconocido" para ""', () => {   
      expect(validator.getIssuer("")).toBe("Desconocido");
    });
  });
});