### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: aiM, ASTRA, Emmsan, Hanka, sosya<br />
Global Rank: [308](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [192]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  571.7<br />
<br />
Final Rank Value (571.7) = Starting Rank Value (599.1) + Head To Head Adjustments (-27.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.245[<sup>1</sup>](#table2)
- Bounty Collected: 0.175[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 599.1
- 400 + ( ( 0.105 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 599.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.043
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2992 | 2026-04-01 | Grindas                | L   | 0.517      | -            | -                | -                | -         |    -9.96 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           15 |     3086 | 2026-03-31 | EXSAD Gaming           | W   | 0.510      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.27 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           14 |     3147 | 2026-03-30 | The Last Resort        | L   | 0.505      | -            | -                | -                | -         |    -2.54 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           13 |     3690 | 2026-03-21 | Leo Team               | L   | 0.445      | -            | -                | -                | -         |    -3.73 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           12 |     3776 | 2026-03-20 | Ursa                   | L   | 0.437      | -            | -                | -                | -         |    -1.99 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           11 |     3909 | 2026-03-17 | Persona Grata          | L   | 0.417      | -            | -                | -                | -         |    -6.64 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           10 |     4684 | 2026-03-01 | PsychoFace             | L   | 0.310      | -            | -                | -                | -         |    -1.08 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            9 |     4833 | 2026-02-26 | FUZOS                  | L   | 0.290      | -            | -                | -                | -         |    -3.43 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            8 |     5448 | 2026-02-14 | Let Her Cook           | L   | 0.212      | -            | -                | -                | -         |    -3.22 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            7 |     5466 | 2026-02-14 | Clutchain Female       | L   | 0.211      | -            | -                | -                | -         |    -2.27 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            6 |     5508 | 2026-02-13 | Fingers Crossed Female | W   | 0.206      | 0.384        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     3.09 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            5 |     5582 | 2026-02-12 | Hashiras               | L   | 0.197      | -            | -                | -                | -         |    -1.97 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            4 |     5597 | 2026-02-11 | Let Her Cook           | W   | 0.192      | 0.384        | 0.002 (0.000)    | 0.024 (0.002)    | 0 (0.000) |     3.14 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            3 |     5647 | 2026-02-10 | Confidence             | W   | 0.185      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.15 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            2 |     5657 | 2026-02-10 | Nexus Gaming           | L   | 0.183      | -            | -                | -                | -         |    -2.35 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            1 |     5670 | 2026-02-09 | Los kogutos            | L   | 0.179      | -            | -                | -                | -         |    -0.80 | aiM, ASTRA, Emmsan, Hanka, sosya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($436.11)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.218 | $2,000.00      | $436.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
