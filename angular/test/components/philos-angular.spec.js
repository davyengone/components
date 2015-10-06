var expect = chai.expect;

describe('Philos components', function(){
  var scope, element;

  beforeEach(module('app'));

  beforeEach(inject(function($compile, $rootScope){
    scope = $rootScope.$new();
    element = $compile('<philos></philos>')(scope);
  }));
angular.extends(vm, model);

vm.model =  



vm.whatever = function(){
  
}
  it('should be a tagElement', function(){
    expect(element[0].tagName).to.be.equal('PHILOS');
  });

});
