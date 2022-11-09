const index = require('./index.js');

test('Length incorrect', () => {
  //Arrange
  const str = 'wass';

  //Act
  const receivedValue = index.stringLength(str);

  //Assert
  expect(receivedValue).toBe(4);
});

test('String is less than 1 character', () => {
  //Arrange
  const str = '';

  //Assert
  expect(() => {
    index.stringLength(str);
  }).toThrow( str + ' doesn\'t meet the requirement');
})

test('String is more than 10 characters', () => {
  //Arrange
  const str = 'FC barcelona';

  //Assert
  expect(() => {
    index.stringLength(str)
  }).toThrow(str + ' doesn\'t meet the requirement');
})

test('the reversed string is not correct', () => {
  //Arrange
  const str = 'Wassim';

  //Act
  const receivedValue = index.reverseString(str);

  //Assert
  expect(receivedValue).toBe('missaw');
})

describe('Calculator', () => {
  describe('Addition', () => {
    test('Add 10 + 20 = 30', () => {
      //Arrange
      const num1 = 10;
      const num2 = 20;
  
      //Act
      const result = index.Calculator.add(num1, num2);
  
      //Assert
      expect(result).toBe(30);
    });

    test('Add 10000 + 25000 = 35000', () => {
      //Arrange
      const num1 = 10000;
      const num2 = 25000;

      //Act
      const result = index.Calculator.add(num1, num2);

      //Assert
      expect(result).toBe(35000);
    });

    test('Add 1000000 + 3000000 = 4000000', () => {
      //Arrange
      const num1 = 1_000_000;
      const num2 = 3_000_000;

      //Act
      const result = index.Calculator.add(num1, num2);

      //Assert
      expect(result).toBe(4_000_000);
    })
  });
  
  describe('Subtraction', () => {
    test('Sub 10 - 5 = 5', () => {
      //Arrange
      const num1 = 10;
      const num2 = 5;
  
      //Act
      const result = index.Calculator.subtract(num1, num2);
  
      //Assert
      expect(result).toBe(5);
    });

    test('Sub 5 - 73 = -68', () => {
      //Arrange
      const num1 = 5;
      const num2 = 73;

      //Act
      const result = index.Calculator.subtract(num1, num2);

      //Assert
      expect(result).toBe(-68);
    });

    test('Sub 0.3 - 0.1 = 0.2', () => {
      //Arrange
      const num1 = 0.3;
      const num2 = 0.1;

      //Act
      const result = index.Calculator.subtract(num1, num2);

      //Assert
      expect(result).toBe(0.2);

    })
  })

  describe('multiplication', () => {
    test('Multiply 5 * 25 = 125', () => {
      //Arrange 
      const num1 = 5;
      const num2 = 25;
  
      //Act
      const result = index.Calculator.multiply(num1, num2);
  
      //Assert
      expect(result).toBe(125);
    });

    test('Multiply 0.7 * 0.2 = 0.14', () => {
      //Arrange 
      const num1 = 0.7;
      const num2 = 0.2;
  
      //Act
      const result = index.Calculator.multiply(num1, num2);
  
      //Assert
      expect(result).toBe(0.14);
    });
    test('Multiply 0.3 * 5 = 1.5', () => {
      //Arrange 
      const num1 = 0.3;
      const num2 = 5;
  
      //Act
      const result = index.Calculator.multiply(num1, num2);
  
      //Assert
      expect(result).toBe(1.5);
    });
  })
  
  describe('Division', () => {
    test('Divide 5 by 2', () => {
      //Arrange
      const num1 = 5;
      const num2 = 2;
  
      //Act
      const result = index.Calculator.divide(num1, num2);
  
      //Assert
      expect(result).toBe(2.5);
    });
    test('Divide 0.4 by 0.1', () => {
      //Arrange
      const num1 = 0.4;
      const num2 = 0.1;
  
      //Act
      const result = index.Calculator.divide(num1, num2);
  
      //Assert
      expect(result).toBe(4);
    });
    test('Divide 3 by 0', () => {
      //Arrange
      const num1 = 3;
      const num2 = 0;
      //Assert
      expect(() => {
        //Act
        index.Calculator.divide(num1, num2);
        
      }).toThrow("Cannot divide by zero");
    });
  })
});

test('Capitalise wassim', () => {
  //Arrange
  const str = "wassim";

  //Act
  const result = index.capitalize(str);

  //Assert
  expect(result).toBe('Wassim');
  
})