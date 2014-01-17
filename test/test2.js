describe('Test2', function(){

  describe('should pass', function(){
    it("should equal 4", function() {
      expect(1+3).to.equal(4);
    });

    it("should not equal 4", function() {
      expect(1+5).to.not.equal(4);
    });

    it("should equal 3", function() {
      expect(1+1+1).to.equal(3);
    });
  });
});