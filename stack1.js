class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.top=null;
    }

    push(val){
        const newNode = new Node(val)
     if(this.top===null){
        this.top=newNode;
        return;
     }else{
        newNode.next = this.top;
        this.top = newNode;
     }
    }

    pop(){
        if(this.top!=null){
            this.top = this.top.next
            return 
        }else{
            return "EMpty"
        }
    }

    display(){
        var temp = this.top
        if(this.top===null){
            return "Empty Stack"
        }
        else{
            while(temp!==null){
                console.log(temp.val);
                temp= temp.next;
            }
        }
    }
}

const Istack = new Stack()

Istack.push(10)
Istack.push(30)
Istack.push(40)
Istack.push(50)
Istack.push(60)
Istack.pop();
Istack.display()