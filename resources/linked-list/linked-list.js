let linkedList = function(){
    let head;
    let size;
    
    //private
    node = function(){
        let prev,next,value = null;
        return {
            prev: prev,
            next: next,
            value: value
        }; 
    }
    
    //private
    let init = function(){
        head = node();
        size = 0;
    }
    
    //public
    let add = function(val){
        let newNode = node();
        newNode.value = value;
        newNode.prev = head;
        if(head.next){
            newNode.next = head.next;
        }
        head.next = newNode;
        size++;
    }

    //private
    let delete = function(val){
        
    }
    
    //public
    let isEmpty = ()=>(head.next === null);

    let removeFirst = function(val) {
        if(!isEmpty())
    }


    return {
        add: add,
        remove: remove,
        isEmpty: isEmpty
    }
}