describe('util', function () {
    describe('pointer', function (){
        var list, p;
        
        beforeEach(function () {
            list = [1,2,3];
            p = pointer(list);
        });
        
        it('should start before the beginning of the list', function () {            
            expect(p.getCurrent()).not.toBeDefined();
            expect(p.beforeFirst()).toBeTruthy();
            expect(p.afterLast()).toBeFalsy();
        });
        
        it('should move forward', function () {  
            p.moveNext();          
            expect(p.getCurrent()).toBe(1);
            expect(p.beforeFirst()).toBeFalsy();
            expect(p.afterLast()).toBeFalsy();
            
            p.moveNext();
            expect(p.getCurrent()).toBe(2);
            
            p.moveNext();
            expect(p.getCurrent()).toBe(3);
        });
        
        it('should move to the end', function () {
            p.moveNext();
            p.moveNext();
            p.moveNext();
            p.moveNext();
            expect(p.getCurrent()).not.toBeDefined();
            expect(p.beforeFirst()).toBeFalsy();
            expect(p.afterLast()).toBeTruthy();
        });
        
        it('should go back', function () {
            p.moveNext(); // 1
            p.moveNext(); // 2
            expect(p.getCurrent()).toBe(2);
            p.movePrevious(); // 1
            p.movePrevious(); // BOF
            
            expect(p.getCurrent()).not.toBeDefined();
            expect(p.beforeFirst()).toBeTruthy();
            expect(p.afterLast()).toBeFalsy();
        });
        
        it('should come back after reaching the end', function () {
            p.moveNext(); // 1
            p.moveNext(); // 2
            p.moveNext(); // 3
            p.moveNext(); // EOF
            p.movePrevious(); // 3
            expect(p.getCurrent()).toBe(3);
        });
    });
});