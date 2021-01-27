// 文字列をカウントする
// 文字列が3文字であることを認識する
// 文字列を分割する
// 文字列の値がすべて等しいかどうか判別する
// 等しければWon 等しくなければLost

#include <iostream>
#include <set>

using namespace std;

int main(void){
    // AtCoderの定石
    string input;
    cin >> input;

    // set はユニークな要素が入るコンテナ
    set<char> S;

    // stdinされた値を１つ１ついれていく
    for(char c:input)
        S.insert(c);

    // ユニークなコンテナのサイズが１であればWon
    if(S.size() == 1)
        cout << "Won";
    else
        cout << "Lost";
    return 0;           
}