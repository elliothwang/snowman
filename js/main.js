// ===== Guess the Word Game ===== //


// ===== RULES ===== //
// 1. Select amount of letters in word from 6-10.
// 2. If the selected letter is contained in the word, the player takes another turn guessing a letter.
// 3. If the selected letter is not contained in the word, a portion of the snowman will be deleted. 
// 4. The game continues until:
  // the word is guessed (all letters are revealed) – WINNER or,
  // all the parts of the snowman are deleted – LOSE

// ===== GAME FLOW =====
  // After selecting game mode, page will load:
    // upper 10%: title & message
    // upper 40% of page will be snowman
      // middle 20% of page will be empty word with blank lines under each "hidden" letter
        // lower 25% of alphabet & on the side of alphabet box; used-letters box
        // last 5% replay button
  
  // player selects letter:
    // if hit, move letter to used-letters box
      // check for win
      // select letter again
    // if miss, move letter to used-letters box
      // remove portion of snowman
      // remove 1 from # of moves
      // select letter again


// ===== constants ===== //
// intialize gameWords to array of difficult spaceman words
let gameWords = ['abruptly','absurd','abyss','affix','askew','avenue','awkward','axiom','azure','bagpipes','bandwagon','banjo','bayou','beekeeper','bikini','blitz','blizzard','boggle','bookworm','boxcar','boxful','buckaroo','buffalo','buffoon','buxom','buzzard','buzzing','buzzwords','caliph','cobweb','cockiness','croquet','crypt','curacao','cycle','daiquiri','dirndl','disavow','dizzying','duplex','dwarves','embezzle','equip','espionage','euouae','exodus','faking','fishhook','fixable','fjord','flapjack','flopping','fluffiness','flyby','foxglove','frazzled','frizzled','fuchsia','funny','gabby','galaxy','galvanize','gazebo','giaour','gizmo','glowworm','glyph','gnarly','gnostic','gossip','grogginess','haiku','haphazard','hyphen','iatrogenic','icebox','injury','ivory','ivy','jackpot','jaundice','jawbreaker','jaywalk','jazziest','jazzy','jelly','jigsaw','jinx','jiujitsu','jockey','jogging','joking','jovial','joyful','juicy','jukebox','jumbo','kayak','kazoo','keyhole','khaki','kilobyte','kiosk','kitsch','kiwifruit','klutz','knapsack','larynx','lengths','lucky','luxury','lymph','marquis','matrix','megahertz','microwave','mnemonic','mystify','naphtha','nightclub','nowadays','numbskull','nymph','onyx','ovary','oxidize','oxygen','pajama','peekaboo','phlegm','pixel','pizazz','pneumonia','polka','pshaw','psyche','puppy','puzzling','quartz','queue','quips','quixotic','quiz','quizzes','quorum','razzmatazz','rhubarb','rhythm','rickshaw','schnapps','scratch','shiv','snazzy','sphinx','spritz','squawk','staff','strength','strengths','stretch','stronghold','stymied','subway','swivel','syndrome','thriftless','thumbscrew','topaz','transcript','transgress','transplant','triphthong','twelfth','twelfths','unknown','unworthy','unzip','uptown','vaporize','vixen','vodka','voodoo','vortex','voyeurism','walkway','waltz','wave','wavy','waxy','wellspring','wheezy','whiskey','whizzing','whomever','wimpy','witchcraft','wizard','woozy','wristwatch','wyvern','xylophone','yachtsman','yippee','yoked','youthful','yummy','zephyr','zigzag','zigzagging','zilch','zipper','zodiac','zombie'];
// initialize var alphabet to array of alphabet letters
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// intialize images to object; keys(movesLeft) : images(stages) of snowman 
let images = {
    0: "url('data:image/png;base64,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')",
    1: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAAEACAMAAAA0tEJxAAAAb1BMVEX///8AAADOzs5hYWFBQUH8/PwdHR3AwMDHx8eqqqqjo6Pz8/P5+fni4uLs7OzZ2dnm5ubc3NwlJSVYWFjU1NQICAgRERHFxcVoaGg0NDS3t7ednZ2Hh4d0dHRPT0+AgICRkZE8PDwsLCyWlpZISEgLbTGgAAAC6klEQVR4nO3dD0/aQByH8VJ3g3H/Wj0nAx2ivv/XuMMtcyqUCwPu2+T52IBUYn6PRWLA9JoGAAAAAAAAAAAAwGks529WXe1pjuLm15N/tbUHOoK/n3wwugqzvPnYMLqK9HD7uWFUFaa9/74rYUQVbvmwp2A0FX7+cyBhDBVuut75qzCiivb+wEFQr3Dp+UtRgWxFmD5uigsUK2xaLfY9n46hwvazYwJUKqy/mz8uvh43f+UKYzs/Xd1fba4PDylbYZ5OMHz9iv96BFFBBRVUUEEFFVRQQQUVVFBBBRVUUHHBilNG1HttcHZY+0O+okTxGxhUnB0VOqjQQYUOKnRQoYMKHVTooEIHFTqo0EGFDip0UKGDCh1U6KBCBxU6qNBBhQ4qdFChgwodVOigQgcVOqjQQYUOKnRQoYMKHVTooEIHFTqo0EGFDip0UKGDCh1U6KBCBxU6qNBBhQ4qdFChgwodVOigQgcVOqjQsSmtmNWedEhxxV3tSYcUnzVxWnvSIcWrrixrTzqkeOGbee1JB9jSiMlz7VEHdMUVj7VHHTAtrljUHnXAc3HFpvaoA16KKyau9qx79eURk2+1h92rbJnD325VD8anBXAH3dQed7ehhUt3eQm1J/4kzI9YLnCdLj/odLflav1QvmrmR0+L9Xy58/ueZ23s057P/LDz/KV12nPLH3aep2IqqKCCCiqooIIKKqigggoqqKCCigMVR7xsJlixuLqkG+l3YQEAAAAAAAAAOA9n7fby7/9sm3zTmu21fXcvZy4/WznbhpRHdk2e0ucLk0wT8y0zs23z2rYd30ZrzJ/P3etmGqUsl0JMXbSzkMzM9cm0wXubom1t8qHrYuejiV2MLvUm5cQ+fz300behrz37G5cHS01nUxOb5HzrUtP6EJ1p88BdDMH5FHoT/fY6725mTd5an+8nVGHzLNF0IbnYxO2POR+J/NHZmPeHvgt2u6Prve19znJd6ELefH6Mxdqz471fTQBDwOZaC1MAAAAASUVORK5CYII=')",
    2: "url('data:image/png;base64,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')",
    3: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEA8QDw8PDw8QEBAVEBERDw8QEA8QFRIYFhUWExUYICggGRomGxUVITEhJSkrLi4uGCA0OD8vNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAACAEEBQYHAgP/xABCEAACAQMBBQUDCAcHBQAAAAAAAQIDBBEFBgcSITETQVFhcSIygRRCUnKCkaGxIzNTYpLB0TRDc6Kys8IIY4PD8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAADzKaXVnyldRXeB9wWsr6C6yS9Xg+EtctU8O4op+dWmv5gZEFvQvqU+cKtOf1Zxl+TLgAAAAAAAAAAAAAAAAAAAAAAAAAAAAB861RRWWB6nNLqYfV9dpUISqVasKVOPWc5JL0Xi/JczWtvNuaNjTzNqdaSzTop4bXRSn4Rz8X3d+I8bSbS3V9U7S5qOXXhguUILwjHuX/zz1A6ntNvopxcoWNF1pfta2YU/VQXNr1aOd6rvD1W4b47ypTi/mUMUUl4Zj7T+LZq4A+tzdVKjzVqVKj8ZzlN5+LPlgAAZWw2kv6GOwvrukl3QuKqj8Y5wzFADo2h75tWoNKtOleU++NanGM8eU6eOfm0zq2yG97Tr1xp1m7G4lhKFaSdKcvCFXp/FwsjIUAm+CM+7fepcWEoW9053NhyST9qrbLxpN9Y/uPw5Y75H6bqFK4pU69vUjVo1YqUJxeVJfyfc11TQFyAAAAAAAAAAAAAAAAAAAAApJ4NM292qhZW8q0sSm8xowbxxzx1f7q6v+rRtF/VwsEX9520bvLyfDLNGm+Cku7gT5y+1JOXpw+AGt6zqtW6rTrVpuc5ybbf9O7l3dy5FjgqAKAqAPJU2nZPd/qOopTtqHDRzjt60uzo5Xg8Ny+ymb1T3BXPDmWoUFPHOMaFSUc/WbT/ADjmAdA17dDqlupShGldxX7GbVTHjwTS+5Nmh1qMoSlCcZQknhxknFpp800wPngMqMAUN/wB0+389NrqjWk5WFeS7Vdewm+XaxX+pd680jQQwJt05qSUotSjJJpp5TT5pp+B6OR7gdrXWoT06tLNW1jxW7by5WzeHHn9CTS9JRXcdcAAAAAAAAAAAAAAAAABgpIDTN4+p9hY3dRPhl2XBBrqp1WqcWvRyz8CLdeWZSfny9FyRIze9pt5WtI07W3q126ylUVNKUlCEJNcur9px5LwI+3+lXFD+0W1xQ/xqFWl/qSAsRg9RK4A8YOj7ndgVqFaVzdRbsreSTj0+UVuvB9VJpy9Uu9455GDbSSzJ4SS6tvkkiXuxehRsbC1tI9aVNdo/p1pe1Ul8ZN+iwu4DMUqcYxjGEVGMUlGMUoxjFckkl0R7AA+dWkpLmc53j7C0r2nOcIRjdwWac8Y7VL5k3+T7n5ZT6UWOpQ5ZAhtc0HCcoSTTT71h+HNdz5fgfJm772NOVLUa/CsKco1El/3IKUv86n95pbiB4wVwVwVSAzuwGru01OyuE8RVeEKnPl2VR8E8/Zk36pEvCEkvy/kTUsanFSpSfWVOD++KYH3AAAAAAAAAAAAAAAAAAFMCUU1hpNeD5oqAMJqOyGm18uvYWlRv5zoU1P8AiSz+Jq+obmdHqZ4Kde2b76NxN49FU4l+B0MAcks9yFKjdW9enfVJU6NelUlSq0YylNQmpY44tJdPos62AAAAAtdQ90ujD7TanTt6FStVlinTi5S8X4RXi28JLxYEf98dwp6hUiv7uFGD9VDif+4jQscjIa9qUri4q1p+9UnKT70nJ5aXkuS+BYAecDB7KeIFKVBzlGEecpyjGK8ZSfCvxZNG3p8MIR+jGK+5YIu7qNEd1q1pHGadCXyir5RpNOOfWp2a+LJTAAAAAAAAAAAAAAAAAAAAAAAAAAD515YTYH0Bx3e7the2k7eFpcyoN06kqnDClLizOMYZ44vGMT6eJy2+281aqsVNRuseEJqjn17NICTe0W1NlYwc7u4hTePZp54qs/qwXN+vQj1vD3g1dRnwQUqNrB5hTz7Un04p478Z5dFnv6mkzqOUnKTcpS6yk3KTfi2+bPKYD+hU85/kVyB6TKZFNNuMYpylJpRik3KUm+SSXV+R3TdVuq7GVO+1KCdZYlb2zw1RfVTq+M/CPzevX3Qzm5jY6Vjayr3EeG6u+GTi17VGil7EH4S5uT9Uu46KAAAAAAAAAAAAAAAAAAAAAAAAAALa+l7LLkstRlyAjvvrueK/cc/q6NCHp79T/wBiOeNm0bzrrtNSumunbTj/AAKNP/izU2wPeSmTyhkD1kvdG02pdXFK2ouCqVpqMHUkoQTxnMpdywmWGSjAlFu/3Z2umqNWeLm9xzrSilGlnqqMfm/W6vyXI3siRs3t7qdi4q3upulHH6Cs3Vo4S6KMucV9Vo7bsLvftL1xoXaVldSwo8Us29aT7oTfut/Rl4rDYHSgAAAAAAAAAAAAAAAAAAAAAAAAAALC/i21hF+UwBH2tud1S7rzrVZ21tCpUqSanUlUqLjnKWVGCa7/AKSMxa7gIf32pTb8KdtGOPjKbz9x2sAcN1DcDLDdtqKbxyjWt2lnznGT/wBJzvanYHUdP53NDipZ5VqUu0pPn3vk4/FIlsW99bRqQlCUVKMk04ySakn1TT6oCFRQ6XvV2EVpP5TbRaoVJYcevZVOvD6NZx6Y8DmiAqUKgDsW6PejOnOnp+o1HOhJqFvcTlmVGXSMKrfWD6KXzeS6e73shESS3HbYSvLOVrXk5XNmorik8yq279yTfe1hxfpF9WB0sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGtbV6TC4o17efKNaDSfL2J9YyXmpJP4EUNRt3TqzhJYabyvCSbUl96ZMPU1zRFnePbqnqN3FLl29V/xNT/5gayAygFTcN0utu01e0m3inXl8nq/VqtKOfJT4H8DT8iM3FqUW4yi04tcmmuaaAm6C20y6VahQrLpVpU5r0nFS/mXIAAAAAAAAAAAAAAALa9rSiuXeBcgjFrW9TW1UlBXipJcnGFvbrDTafNxb7vE1+7251aq8z1K99IV6lJfFQaQEvS0udUt6f624oU/r1acPzZDe71O4q/rbivV/xK1Sf5sssATLsNpLGvV7G3vLavWw32dKtTqTSXV4i/NGVIjbtNXVpq1jWk8Q7bs6nPC4KqdNt+S4k/gS5AAAAAAMdqnVEYd6sk9Tu8ftfypU0/xRJrUp+15LqRO2sv8At7uvWTyqlWrOL/dnNuP+XhAw4DRQAGA+gEv93829K0xvr8itv9qJsBjdmrTsbKzovk6VtQg/WNOKf5GSAAAAAAAAAAAAAAB8LyGYvyPuUaAiXvL0x2+o3UcNRdWU4ecKv6RY8k5SX2TVjuO/jZ3ihTvILnTxSqv9yUs0pPyU24/+RHDgDAAFGSt3U7VLUNOpTlLNzQSpXK73OK9mf2o4l4Z4l3EUzO7F7WXOmXKuLd8Sa4a1KTfBXp591+D71LufllMJgg1rY3bix1KCdvVUayX6S3qNRrU3jn7Pzo/vLK/I2UAUk8IqantztvZ6fTl2tSMq7XsUISTqyfdlfNj5v4Z6Aa/vX2kja2dWKlitcxlTgk/ajBrFSa9E8J+MkRvqTy233sy21O0Ve+uJ16z5vlGK92EF7sYrwWX8W33mHAMAADM7F6R8r1GytccUateHaJ/sovjqf5IyMMdq/wCnXZxudxqVSPsxXYW7ffJ4dWS9Fwxz5y8AO6AAAAAAAAAAAAAAAAAADFa/psK9KpTqR4qdSEoTj4xawyKe2Oz1SxuqlCplpPMJ45VKb92a9cYfg00TAks8jRt4mxdO/oOPKNaHE6FRr3W+sJY+Y8LPhhPuAi2C91bTKttVnRrQlCcJYafVP+fr3rmWYFAVwVwAp1JRlGUJSjKLTjKLcZRa6NNc0zbtN3n61RSjG/qTilhKtCnWf8U05fiajgokBtep7ydZrpxqahWjF91JQocvDNNJ/iapOTbcm25Nttt5bb6tsNFcAeQesFAKMMqXFhY1a9WnQoU5Va1WSjThFZlKX9O/PckBd7M6DWvrqjaW6zOrLnLGY0oL3py8kuf3LqyXWz+j0rO2oWtBYpUYKK6Zk+spS8222/Nmsbr9goaXbtzcal7WS7eouaguqpU39FePe+fglu4AAAAAAAAAAAAAAAAAAADzOKawz0ANE2/2Bo39Pn+jrxTVOsllpdeGa+dHPxXd35jvtLsvd2NTguaTim3w1F7VKp9WXf8Ag/FImE0Y/UtIpVoSp1KcKkJL2oTipQl6pgQ0R6O87R7lrWo5TtJ1LSb58P62jnOejfEvvOf6rup1Wi3wUqdzHxo1IqWPFxnh/dkDRkgZK62fvaWe1srunjq5W9VL78YZjJcniSafg00BUYPPEvEyNhol3X/s9pc18v8AuqFWa+9LAFgUR0LRNzmr12nVp0rOHjWqKU8eUIZfweDpmzG5bT7dxndSnf1VjlNdnQT/AMNc39pteQHEtkNib7UppWtJqknidxUzGhT+185/uxy/zJGbBbAWml0801211KOKtzOKU5LvjBfMhldF1wst4RtVCjCEYwpxjCEViMYxUYxXgkuSR9AAAAAAAAAAAAAAAAAAAAAAAAAAAAHiVKL6pHsAfH5NHwPMrKm+sYv1SZcAC3jY0l0pw/gifdIqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=')",
    4: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAAD/CAMAAAB2B+IJAAAAclBMVEX///8AAACysrJJSUnKysr8/PxmZmb4+Pjl5eWZmZkUFBRPT08EBATFxcUeHh729vbr6+vc3NxGRkaEhIQ6Ojq+vr7w8PC4uLglJSUwMDBzc3NUVFTS0tJjY2NtbW19fX2np6ePj4+VlZWhoaEjIyM/Pz8mNRncAAAFHUlEQVR4nO2d21bjOBBFy0DFJjiJ0+QCDWku3fP/vziSzKwJjV2lpN3Lx3D2Ay8QL+2UrmVJiBBCCCGEEEIIIYQQQgghhHxddOwCEILIalX2otNoNqqHet5LsR+7fBmoqjwXFhdjFzEDLaUpinrqFqI3ZijQLbT9YdcnfIvYJnQ9n7ZFatly6UigW4RAqLx4EugWsWGsQ/9kdVATsBApv7mhmICFX5/gLVQWGRLoFlLefwaL2xwJZAsN86es+gRtERpFs5m8RRjvnmIRnbEC3UL2SWLaFrIrMkMBaqFpAvU9o/zIFmldsc2WgLVQqZZTt4hLo0O+BK6Ft0idgIXEpMfkLVQfPoGF/MwaJsAt3KQHvEXMemQsUsEtwoj3WuRNPKAtHk+MBKKFrlJSdsKxSGnZvEUqtEVm0gPbIvRPJ0wCMS1ChSpvT2sRgBZn1icwC9Xmn09g0SY9Jm5xyiIV12J3pgSWRX7SA9QijhT7cyVwLESqExcViBYqpy1SQS0uzpfAsIiTwOoPJCAsVFdyYtID0iImPc6ZBSJZSMZOD3yLEItNiMTEY6Fy3Vu++ugntoU4SY/7uynEoryxv+wLZ6cahoWxqIit5VIcSwiLK7veL9fyDdwiTGW9nR4/8feqqZtEO5QKbyFu0qMR/Fi4Oz2e45gIbKFlrE/GIjX2Tw9pEYht4SY95us4U0S2SEk0Jyn7LOixiNFwkh6HMr2/x7aISQ9z31CTIgFuUVkGdSzb2wkXYAsr6VHHGB1kAhZiJT2CxK91u1Ue22JtTgLrVJ/QYxF3epgT1R/y/3lJVAtrkdpSHf01qIXG+mTyfPznoBaizk6P2btjhKAW6tSnu0r0SAPQInafj0b/VLfjHXYsQvdZrqyFdPjNgyh6jSrjItXsZOc7fa+BZ6Fp55Cdf0ojBbaFlhtnvGuPGh59BspC24mRmfSoi2Xz4bA2lEVbOjPpEYK0/XjiHMsieuyMJFqsaDMp0S3UTMpG2v4J3WJr9U9hwNvK+wEP0EK1MV9F1MVT2fU5KAs7iRZZNp0fhLKwF6mRnrsksCzMpEeR1ned93rgWMTizfqbdpzJbirp1oCxUPF3Du37bljBsSh1XVvvtOviu2pHL4tl4R5vWa7erjlAtnCTHtu3v0O1SN+wfVyq/i1fgGeRJNQsSV3c74y7kxAsUjV5ccqxsG5OQ7CISyPnzXzx1DUJhLIIX3LpbR+3L+NCsAhfsne8ZWE/AcHCPy715DwAwmLl1Kf77vk4mIVXn668G+rGttB2kdpL7Lhu3Xv2RrdQ3TmL1Lud+5SRLUIfayc9uvNPYBZOfYrcijngYVhUThJt07xdYwdq0bZZK+kRV6lu/zS6RekkPep2/gRu4d/BsNlJznWmY7aLUtRIeqTfLPJuZB0zFprqkzUh9+ZP/+FeINBtMcyttWsniXaZ+yB3h3ZPTnGQq3e9O2JuZodZDj/m3t7my66PHfYDeLg3SfzBeYu8J10PEgyvUQ6n0f2oYSzc6vyXuR7AgRa0oAUtaEELWtCCFrSgBS1oQQta0OIrWGQc3JyAxXCxODf7NkRWLcZiqOxfzl3/H3kdxOK8GxCHYwgLkcfF1SA8uv8F46XrY4sK69/ujf2meBhogQMtcKAFDrTAgRY40AIHWuBACxxogQMtcKAFDrTAgRY40AIHWuDwZSyQXrf08Dks3BeEU6hRWjWVjX8Udnzc2qJYryEJIYQQQgghhBBCCCGEEEIIIaSTfwFls0/y8xKZhwAAAABJRU5ErkJggg==')",
    5: "url('data:image/png;base64,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')",
    // 6: "url('data:image/jpeg;base64,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')",
    6 : "url('https://www.wilsoninfo.com/christmas-clipart/2020-snowman-dressed-for-Christmas.jpg')"
};

  // ===== app's state ===== //
  let word, wordPlaceHolder, winner, movesLeft;

  // initialize var guesses to empty array
  let guesses = [];


  // ===== cached element references ===== //
  let snowmanImg = document.querySelector("#img");
  let movesLeftEl = document.querySelector("#moves");
  let wordEl = document.querySelector("#word");
  let keyboard = [...document.querySelectorAll("#alphabet-board > *")];
  let replayButton = document.querySelector("#reset");

  // ===== event listeners ===== //
  replayButton.addEventListener("click", init);
  keyboard.forEach(div => div.addEventListener("click", handleClick));

  init ();
  
  // ===== functions ===== //
  function init () {
    // reassign winner to null;
    winner = null;
    // reassign amount of moves left to & display movesLeft
    movesLeft = 6;
    movesLeftEl.innerText = `Moves Left: ${movesLeft}`;

    // // reset snowman picture to first stage => snowmanImg.style.backgroundImage = images.0;
    snowmanImg.style.backgroundImage = images[movesLeft];

    // reassign word to empty string
    word = "";

    // reset guesses array
    guesses = [];

    // set replayButton's visibility to hidden
    // replayButton.style.visibility = "hidden";

    // invoke selectWord function
    selectWord();

    // invoke render function
    render();
  }

  function selectWord() {
    // randomly select element from gameWords Array & assign it to wordEl.innerText
    word = gameWords[Math.floor(Math.random() * gameWords.length)];
    console.log(word);
  };
  
  function handleClick(evt) {
    console.log(evt.target)
    // test truthiness of evt.target.id within word using indexOf method
    if (word.indexOf(evt.target.id) >= 0) {
      console.log("yes!");
      
      // // set background color of evt.target.id's button to red
      // document.getElementById(evt.target.id).style.backgroundColor = "green";

      // invoke render function
      render();
      
    }
      else if (word.indexOf(evt.target.id) === -1) {
        console.log("no!")

      // set background color of evt.target.id's button to red
      // document.getElementById(evt.target.id).style.backgroundColor = "green";

        // decrement movesLeft
        movesLeft--;
        movesLeftEl.innerText = `Moves Left: ${movesLeft}`;

        // reassign image to images[movesLeft];
        snowmanImg.style.backgroundImage = images[movesLeft];
      }

    // test evt.target.id truthiness within guesses array, push into guesses array
    if (guesses.indexOf(evt.target.id) === -1) {
      guesses.push(evt.target.id);
    }
      // disable evt.target.id's button
      document.getElementById(evt.target.id).disabled = true;

    // invoke CheckForWinOrLoss function
    checkForWinOrLoss();
  };

  
  function render() {
    // create new array to be wordPlaceHolder
    let wordPlaceHolder = [];
      // iterate through word with for loop
      for (letter of word.split("")) {
        if (guesses.indexOf(letter) >= 0) {
          wordPlaceHolder.push(letter);
        }
        else wordPlaceHolder.push(" _ ");
      };
  
    // assign #word's html to var wordPlaceHolder
    wordEl.innerHTML = wordPlaceHolder.join("");
  };
  
  function checkForWinOrLoss() {
    // if movesLeft > 0 && wordPlaceholder = word, diplay win message
    if (movesLeft > 0 && wordPlaceHolder === word) {
      wordEl.innerHTML = "You saved the snowman!";

      // set reset button to visible =>  replayButton.style.visibility = "visible";
      replayButton.style.visibilty = "visible";
    }

    // if movesLeft = 0, display loss message
    if (movesLeft === 0) {
      wordEl.innerHTML = "The snowman melted!";

      // set reset button to visible =>  replayButton.style.visibility = "visible";
      replayButton.style.visibilty = "visible";
    }
  };