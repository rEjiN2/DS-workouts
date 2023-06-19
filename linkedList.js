// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;

//     }
// addNode(val){
//     var newNode = new Node(val)
// if(this.head===null){
//     this.head = newNode;
// }else{
//     this.tail.next=newNode;
// }
// this.tail = newNode
// }

// display() {
//     if (this.head === null || this.tail === null) {
//       console.log("empty");
//       return;
//     }

//     let temp = this.head;
//     while (temp !== null) {
//       console.log(temp.val);
//       temp = temp.next;
//     }
//   }
// }

// var l1 = new linkedList();
// l1.addNode(10);
// l1.addNode(20)
// l1.addNode(30)
// l1.addNode(156)
// l1.addNode(50)
// l1.addNode(60)
// l1.display();


class Node {
    constructor(val){
        this.val = val;
        this.next=null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    addNode(val){
        var newNode = new Node(val)
        if(this.head===null){
            this.head = newNode;
        }else{
            this.tail.next = newNode
        }
        this.tail = newNode
    }

    display(){
        if(this.head === null){
            return "empty"
        }
        var temp = this.head;
        while(temp!==null){
            console.log(temp.val);
            temp = temp.next;
        }
    }
    deleteNode(val){
     var temp = this.head;
     if(temp===null){
        return undefined;
     }
     if(temp.val===val){
        this.head = temp.next;
        return;
     }
     var prev= null;
     for(temp;temp!==null&&temp.val!==val;temp=temp.next){
        prev=temp;
     }
     if(temp===this.tail){
        this.tail = prev;
        this.tail.next=null;
        return;
     }
     prev.next=temp.next;
    }
    
    insertAfter(nextTo,val){
       var newNode = new Node(val)
       var temp = this.head;
       while(temp!=null && temp.val!=nextTo){
            temp=temp.next;
       }
       if(temp===null){
        return "ni poo mone dinesha";
       }
       if(temp===this.tail){
        this.tail.next=newNode;
        this.tail=newNode;
        return;
       }
       newNode.next = temp.next;
       temp.next =  newNode;

    }
   
}

var list = new linkedList();
list.addNode(10);
list.addNode(20);
list.addNode(30);
list.addNode(40);
list.addNode(50);
list.addNode(60);
list.deleteNode(10);
console.log(list.insertAfter(10,150));
list.display();
