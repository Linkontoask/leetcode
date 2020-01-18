/**
 * 非Leetcode 题目
 * 
 * 在待搜索数据中，按照输入的字符串输出（最符合的在前面，不符合的不输出）
 */

 /**
  * 
  * @param {string[]} strs 
  */
 function search (strs, s) {
    const str = [...s].map(item => item.toLocaleLowerCase())
    const searchs = strs.map(item => item.toLocaleLowerCase())

    var r = [], tp = [].concat(str);
    for (var i = 0; i < searchs.length; i++) {
        var item = searchs[i];
        
        b:for (var j = 0; j < tp.length; j++) {
        
            c:for (var o = 0; o < item.length; o++) {
                if (item[o] === tp[j]) {
                    item = item.substr(o + 1);
                    tp = tp.slice(j + 1, tp.length);
                    if (tp.length === 0) {
                        r.push(strs[i]);
                        tp = [].concat(str);
                        break b;
                    } else {
                        j = -1;
                        o = -1;
                        break c;
                    }
                } else {
                    if (o === item.length - 1) {
                        tp = [].concat(str);
                        break b;
                    }
                }
            }
        }
    }
    return r;
 }

 console.log(search(
     [
         'XMLDocument',
         'Map',
         'pwo',
         'Math',
         'body',
         'document',
         'window',
         'PictureInPictureWindow',
         'DocumentFragment',
         'DocumentType'], 'winw'
))