(function(root){
 const shuffle=(items,random=Math.random)=>{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
 const canonical=q=>q.question.normalize('NFKC').replace(/\s*\(Scenario:.*?\)\.?/gi,'').replace(/\s+/g,' ').trim().toLowerCase();
 function validate(items){if(!Array.isArray(items))throw Error('Banque invalide');const ids=new Set(),texts=new Set();for(const q of items){if(!q.id||ids.has(q.id)||!q.question||!Array.isArray(q.options)||q.options.length!==4||new Set(q.options).size!==4||!Number.isInteger(q.answer)||q.answer<0||q.answer>3)throw Error('Question invalide : '+q.id);const k=canonical(q);if(texts.has(k))throw Error('Question répétée : '+q.id);ids.add(q.id);texts.add(k)}return items}
 function select(items,count){const seen=new Set(),unique=shuffle(items).filter(q=>{const k=q.repetitionGroup||canonical(q);if(seen.has(k))return false;seen.add(k);return true});if(unique.length<count)throw Error('Pas assez de questions distinctes');return unique.slice(0,count)}
 const api={shuffle,canonical,validate,select};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.TrainerEngine=api;
})(typeof window!=='undefined'?window:globalThis);
