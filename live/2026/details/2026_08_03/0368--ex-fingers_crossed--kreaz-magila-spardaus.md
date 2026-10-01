### Roster Details<br />
Team Name: ex-Fingers Crossed<br />
Roster: kreaz, MAGILA, spardaus<br />
Global Rank: [368](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [236]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  489.1<br />
<br />
Final Rank Value (489.1) = Starting Rank Value (485.0) + Head To Head Adjustments (4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 485.0
- 400 + ( ( 0.044 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 485.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4777 | 2026-03-09 | Black Phoenix  | L   | 0.222      | -            | -                | -                | -         |    -0.72 | Dytor, kreaz, MAGILA, spardaus, stikle- |
|            4 |     4802 | 2026-03-09 | Rune Eaters    | L   | 0.220      | -            | -                | -                | -         |    -0.08 | Dytor, kreaz, MAGILA, spardaus, stikle- |
|            3 |     4966 | 2026-03-06 | HEROIC Academy | W   | 0.201      | 0.384        | 0.002 (0.000)    | 0.369 (0.028)    | 0 (0.000) |     5.30 | Dytor, kreaz, MAGILA, spardaus, stikle- |
|            2 |     5646 | 2026-02-21 | Phantom        | L   | 0.112      | -            | -                | -                | -         |    -0.10 | kreaz, MAGILA, nbqq, oskar, spardaus    |
|            1 |     5998 | 2026-02-14 | DragonClaw     | L   | 0.067      | -            | -                | -                | -         |    -0.23 | kreaz, MAGILA, nbqq, oskar, spardaus    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
