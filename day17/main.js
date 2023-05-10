//문제. 단일 열결리스트: push
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val) {
//         let node = new Node(val);
//         if (!this.head) this.head = node;
//         else this.tail.next = node;
//         this.tail = node;
//         this.length++;
//     }
//     pop() {
//         if (!this.length) return undefined;
//         //마지막 노드 추출
//         let now = this.head;
//         let remove;
//         //리스트가 비어있지 않을 때까지
//         while (now.next) {
//             if (!now.next.next) {
//                 //이전 노드는 항상 추적
//                 remove = now.next;
//                 //마지막에서 두번째 노드의 next를 null로 설정
//                 now.next = null;
//                 //tail의 값을 마지막에서 두번째 노드로 업데이트
//                 this.tail = now;
//             } else {
//                 now = now.next;
//             }
//         }
//
//         //길이 감소
//         this.length--;
//         //제거한 노드 반환
//         return remove;
//     }
// }

//솔루션
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("END");
